var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');

var UserView = Backbone.View.extend({
  tagName: 'article',
  className: 'user',
  template: '<%= name %>',

  initialize: function(options) {
    _.bindAll(this, "render");

    this.router = options.router;

    this.listenTo(this.model, 'change:name', this.render);
  },

  render: function() {
    var tmpl = _.template(this.template);
    this.$el.html(tmpl(this.model.toJSON()));
    this.$el.toggleClass('selected', this.model.get('selected'));

    return this;
  },

  events: {
    'click': '_selectUser'
  },

  _selectUser: function(ev) {
    ev.preventDefault();

    if(!this.model.get('selected')) {
      this.model.collection.resetSelected();
      this.model.collection.selectById(this.model.id);

      this.router.navigate("/users/" + this.model.id, {trigger: true});
    }
  }
});

module.exports = UserView;
