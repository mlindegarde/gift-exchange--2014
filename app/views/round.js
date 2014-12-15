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
    this.router = options.router;

    this.userList = new RandomUserList({
      collection: this.model.get('users'),
      router: options.router
    })
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    this.userList.setElement(this.$('#randomUserList')).render();

    return this;
  },

  events: {
    "click .next-round": "_nextRound"
  },

  _nextRound: function(ev) {
    ev.preventDefault();

    this.router.navigate(
      '/rounds/' + (parseInt(this.model.id) + 1), {
        trigger: true
      });
  }
});

module.exports = RoundView;