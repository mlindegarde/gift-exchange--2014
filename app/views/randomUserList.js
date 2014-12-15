var Backbone = require('backbone');

var RandomUserView = require('views/randomUser');
var RandomizedUserList = Backbone.View.extend({
  tagName: 'section',

  initialize: function(options){
    this.router = options.router;
  },

  render: function() {
    var that = this;
    var userViews = this.collection.map(function(user) {
      return (new RandomUserView({model: user, router: that.router})).render().el;
    });

    this.$el.html(userViews);
    return this;
  }
});

module.exports = RandomizedUserList;