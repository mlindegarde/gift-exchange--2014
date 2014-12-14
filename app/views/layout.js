var Backbone = require('backbone');
var _ = require('underscore');

Backbone._ = _;

// import the moviesList
var UsersList = require('views/userList');
var ChoseView = require('views/chose');
var DetailsView = require('views/details');

var Layout = Backbone.View.extend({
  template: _.template('             \
             <div id="overview">     \
             </div>                  \
             <div id="details">      \
             </div>'),

  initialize: function(options) {
    // create the selection list
    this.overview = new UsersList({
      collection: options.router.users,
      router: options.router
    });

    // create the details view
    this.currentDetails = new ChoseView();
  },

  render: function() {
    this.$el.html(this.template());
    this.currentDetails.setElement(this.$('#details')).render();
    this.overview.setElement(this.$('#overview')).render();

    return this;
  },

  setDetails: function(user) {
    if(this.currentDetails) {
      this.currentDetails.remove();
    }

    this.currentDetails = new DetailsView({model: user});
    this.render();
  },

  setChose: function() {
    if(this.currentDetails) {
      this.currentDetails.remove();
    }

    this.currentDetails = new ChoseView();
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
