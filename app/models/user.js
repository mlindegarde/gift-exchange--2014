var Backbone = require("Backbone");

var User = Backbone.Model.extend({
  defaults: {
    name: 'default',
    history: new Array(),
    enabled: true
  }
});

module.exports = User;
