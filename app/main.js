var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');

Backbone.$ = $;
Backbone._ = _;

var Movies = require('collections/movies');

var data = require('data/movies.json');
var movies = new Movies(data);

var MovieView = require('views/movie');

module.exports = { movies: movies, MovieView: MovieView  };