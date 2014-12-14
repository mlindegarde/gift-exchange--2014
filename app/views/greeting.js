var Backbone = require('backbone');

var GreetingView = Backbone.View.extend({
  template: '<h1>Welcome to the 2014 Christmas Exchange</h1>',

  className: 'details',

  render: function() {
    this.$el.html(this.template);
    return this;
  }
});

module.exports = GreetingView;