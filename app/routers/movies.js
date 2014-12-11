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
var Movies = require('collections/movies');
var MoviesList = require('views/movieList');

var MoviesRouter = Backbone.Router.extend({
  routes: {
    'movies/:id': 'selectMovie',
    '': 'showMain'
  },

  selectMovie: function(id) {
    this.moviesList.render();
    this.movies.selectById(id);
  },

  showMain: function() {
    this.moviesList.render();
  },

  initialize: function(options) {
    this.movies = movies;
    this.moviesList = new MoviesList({
      el: options.el,
      collection: movies
    });

    _.extend(this.moviesList, {router: this});
  }
});

module.exports = MoviesRouter;
