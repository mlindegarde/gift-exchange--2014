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
    'users/:id/remove': 'removeUser',
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
    var round = parseInt(id);

    $(document).prop('title', '2014 Gift Exchange - Round '+round);

    this.round = new Round();

    this.round.set('id', id);
    this.round.set('users', this.users.randomize());
    this.round.set('nextRoundId', round + 1);

    this.layout.setRound(this.round);
  },

  removeUser: function(id) {
    this.users.removeById(id);
  },

  showMain: function() {
    //this.layout.setGreeting();
    this.navigate('/rounds/1', {trigger: true});
  }
});

module.exports = RoundsRouter;
