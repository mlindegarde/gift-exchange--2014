var Backbone = require("Backbone");
var UserList = require('collections/users');

var Round = Backbone.Model.extend({
  defaults: {
    users: null,
    nextRoundId: 0
  }
});

module.exports = Round;