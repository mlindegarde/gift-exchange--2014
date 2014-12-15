var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');

var Handlebars = require('handlebars');
var Templates = require('templates/compiledTemplates')(Handlebars);

var UserView = Backbone.View.extend({
  tagName: 'article',
  className: 'user',
  template: Templates['user'],

  initialize: function(options) {
    _.bindAll(this, "render");

    this.router = options.router;

    this.listenTo(this.model, 'change:name', this.render);
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    this.$el.toggleClass('selected', this.model.get('selected'));

    return this;
  }
});

module.exports = UserView;
