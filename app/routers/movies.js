var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');

Backbone.$ = $;
Backbone._ = _;

// data
var Movies = require('collections/movies');
var data = require('data/movies.json');
var movies = new Movies(data);

// views
var Layout = require('views/layout');

var Movies = require('collections/movies');
var MoviesList = require('views/movieList');

var MoviesRouter = Backbone.Router.extend({
  routes: {
    'movies/:id': 'selectMovie',
    '': 'showMain'
  },

  selectMovie: function(id) {
    this.movies.resetSelected();
    this.movies.selectById(id);
    this.layout.setDetails(this.movies.get(id));
  },

  showMain: function() {
    this.movies.resetSelected();
    this.layout.setChose();
  },

  initialize: function(options) {
    this.movies = movies;
    this.layout = Layout.getInstance({
      el: '#movies',
      router: this
    });

    this.layout.render();
  }
});

module.exports = MoviesRouter;
