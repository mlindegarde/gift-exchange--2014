var Backbone = require('backbone');
var _ = require('underscore');

Backbone._ = _;

// import the moviesList
var UserList = require('views/userList');
var GreetingView = require('views/greeting');
var RoundView = require('views/round');

var Handlebars = require('handlebars');
var Templates = require('templates/compiledTemplates')(Handlebars);

var Layout = Backbone.View.extend({
  template: Templates['layout'],

  initialize: function(options) {
    // create the selection list
    this.userList = new UserList({
      collection: options.router.users,
      router: options.router
    });

    // create the details view
    this.currentRound = new GreetingView();
  },

  render: function() {
    this.$el.html(this.template());
    this.currentRound.setElement(this.$('#round')).render();
    this.userList.setElement(this.$('#userList')).render();

    return this;
  },

  setRound: function(round) {
    if(this.currentRound) {
      this.currentRound.remove();
    }

    this.currentRound = new RoundView({model: round});
    this.render();
  },

  setGreeting: function() {
    if(this.currentRound) {
      this.currentRound.remove();
    }

    this.currentRound = new GreetingView();
    this.render();
  }
});

var instance;

Layout.getInstance = function(options) {
  if(!instance) {
    instance = new Layout({
      el: options.el,
      router: options.router,
      collection: options.router.users
    });
  }

  return instance;
}

module.exports = Layout;
