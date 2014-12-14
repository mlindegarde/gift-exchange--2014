var Backbone = require('backbone');

var UserView = require('views/user');
var UserList = Backbone.View.extend({
  tagName: 'section',

  initialize: function(options){
    this.router = options.router;
  },

  render: function() {
    var that = this;
    var userViews = this.collection.map(function(user) {
      return (new UserView({model: user, router: that.router})).render().el;
    });

    this.$el.html(userViews);
    return this;
  }
});

module.exports = UserList;