var Backbone = require('backbone');
var $ = require('jquery');

Backbone.$ = $;

var Movies = require('collections/movies');

var data = require('data/movies.json');
var movies = new Movies(data);

var MovieView = require('views/movie');

module.exports = { movies: movies, MovieView: MovieView  };
