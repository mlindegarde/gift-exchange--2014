var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');

Backbone._ = _;
Backbone.$ = $;

var RandomUserList = require('views/randomUserList');

var Handlebars = require('handlebars');
var Templates = require('templates/compiledTemplates')(Handlebars);

var RoundView = Backbone.View.extend({
  el: '#round',

  template: Templates['round'],

  initialize: function(options) {
    this.userList = new RandomUserList({
      collection: this.model.get('users'),
      router: options.router
    })
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    this.userList.setElement(this.$('#randomUserList')).render();

    return this;
  }
});

module.exports = RoundView;