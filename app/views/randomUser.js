var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');

var Handlebars = require('handlebars');
var Templates = require('templates/compiledTemplates')(Handlebars);

var Images = [
  'abominable-snowman.svg',
  'angel.svg',
  'ball-ornament.svg',
  'candy-cane.svg',
  'cardinal.svg',
  'christmas-tree.svg',
  'elf.svg',
  'gingerbread-man.svg',
  'mrs-clause.svg',
  'mug.svg',
  'nutcracker.svg',
  'penguin.svg',
  'reindeer-1.svg',
  'reindeer-2.svg',
  'santa-clause.svg',
  'snowflake.svg',
  'snowman.svg',
  'stocking.svg'
];

var RandomUserView = Backbone.View.extend({
  tagName: 'li',
  className: 'random-user',
  template: Templates['randomUser'],

  initialize: function(options) {
    _.bindAll(this, "render");

    this.router = options.router;
    this.model.set('image', Images[Math.floor(Math.random()*(Images.length))]);

    this.listenTo(this.model, 'change:name', this.render);
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));

    return this;
  },

  events: {
    'click': '_showUser'
  },

  _showUser: function(ev) {
    ev.preventDefault();

    this.$el.addClass('flipped');
  }
});

module.exports = RandomUserView;
