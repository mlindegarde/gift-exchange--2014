var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');

Backbone._ = _;
Backbone.$ = $;

var RoundView = Backbone.View.extend({
  el: '#round',

  template: _.template('<%= id %>'),

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});

module.exports = RoundView;