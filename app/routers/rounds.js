var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');

Backbone.$ = $;
Backbone._ = _;

// model
var Round = require('models/round');
var Users = require('collections/users');

// data
var data = require('data/users.json');
var users = new Users(data);

// views
var Layout = require('views/layout');
var UserList = require('views/userList');

// router
var RoundsRouter = Backbone.Router.extend({
  routes: {
    'rounds/:id': 'selectRound',
    '': 'showMain'
  },

  initialize: function(options) {
    this.users = users;
    this.round = null;
    this.layout = Layout.getInstance({
      el: options.el,
      router: this
    });

    this.layout.render();
  },

  selectRound: function(id) {
    this.round = new Round();

    this.round.set('id', id);
    this.round.set('user', this.users.randomize());

    this.layout.setRound(this.round);
  },

  showMain: function() {
    this.layout.setGreeting();
  }


});

module.exports = RoundsRouter;
