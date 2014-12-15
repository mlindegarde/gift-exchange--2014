var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');

var Handlebars = require('handlebars');
var Templates = require('templates/compiledTemplates')(Handlebars);

var RandomUserView = Backbone.View.extend({
  tagName: 'li',
  className: 'random-user',
  template: Templates['randomUser'],

  initialize: function(options) {
    _.bindAll(this, "render");

    this.router = options.router;

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
