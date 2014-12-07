var Backbone = require("Backbone");
var Movie = require('models/movie');

var Movies = Backbone.Collection.extend({
  mdoel: Movie
});

module.exports = Movies;
