var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');

Backbone.$ = $;
Backbone._ = _;

// model
var Users = require('collections/users');

// data
var data = require('data/users.json');
var users = new Users(data);

// views
var Layout = require('views/layout');
var UserList = require('views/userList');

// router
var UsersRouter = Backbone.Router.extend({
  routes: {
    'users/:id': 'selectUser',
    '': 'showMain'
  },

  showMain: function() {
    this.layout.setChose();
  },

  initialize: function(options) {
    this.users = users;
    this.layout = Layout.getInstance({
      el: options.el,
      router: this
    });

    this.layout.render();
  }
});

module.exports = UsersRouter;
