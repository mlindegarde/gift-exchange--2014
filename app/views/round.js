var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');

Backbone._ = _;
Backbone.$ = $;

var Handlebars = require('handlebars');
var Templates = require('templates/compiledTemplates')(Handlebars);

var RoundView = Backbone.View.extend({
  el: '#round',

  template: Templates['round'],

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});

module.exports = RoundView;