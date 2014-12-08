var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');

var MovieView = Backbone.View.extend({
  tagName: 'article',
  className: 'movie',
  initialize: function() {
    _.bindAll(this, "render");
    this.listenTo(this.model, 'change:title', this.render);
  },
  render: function() {
    this.$el.html(this.model.get('title'));
    this.$el.toggleClass('selected', this.model.get('selected'));

    return this;
  }
});

module.exports = MovieView;
