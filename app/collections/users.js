var Backbone = require("Backbone");
var User = require('models/user');

var Users = Backbone.Collection.extend({
  model: User,

  disableById: function(id) {
    var user = this.get(id);

    if(user){
      user.set('enabled', false);
    }
  },

  addUser: function(model) {
    this.add(model);
  },

  randomize: function() {
    return this.shuffle();
  }
});

module.exports = Users;
