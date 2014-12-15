var Backbone = require('backbone');

var Handlebars = require('handlebars');
var Templates = require('templates/compiledTemplates')(Handlebars);

var GreetingView = Backbone.View.extend({
  template: Templates['greeting'],

  className: 'details',

  render: function() {
    this.$el.html(this.template());
    return this;
  }
});

module.exports = GreetingView;