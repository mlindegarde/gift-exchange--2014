var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');

var MovieView = Backbone.View.extend({
  tagName: 'article',
  className: 'movie',
  template: '<h1><%= title %><hr></h1>',
  initialize: function() {
    _.bindAll(this, "render");
    this.listenTo(this.model, 'change:title', this.render);
    this.listenTo(this.model, 'change:selected', this.render);
  },
  render: function() {
    var tmpl = _.template(this.template);
    this.$el.html(tmpl(this.model.toJSON()));
    this.$el.toggleClass('selected', this.model.get('selected'));

    return this;
  },
  events: {
    'click': '_selectMovie'
  },
  _selectMovie: function(ev) {
    ev.preventDefault();
    
    if(!this.model.get('selected')) {
      this.model.collection.resetSelected();
      this.model.collection.selectById(this.model.id);
    }
  }
});

module.exports = MovieView;
