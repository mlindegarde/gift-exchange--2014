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

  add: function(model) {
    this.add(model);
  },

  randomizeOrder: function() {
    this.collection.reset(this.collection.shuffle(), {silent: true});
  }
});

module.exports = Users;
