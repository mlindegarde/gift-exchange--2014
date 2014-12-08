var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');

Backbone.$ = $;
Backbone._ = _;

var Movie = require('models/movie');
var Movies = require('collections/movies');

var data = require('data/movies.json');
var movies = new Movies(data);

var MovieView = require('views/movie');
var MoviesList = require('views/movieList');

module.exports = {
    Movie: Movie,
    movies: movies,
    MovieView: MovieView,
    MoviesList: MoviesList
};
