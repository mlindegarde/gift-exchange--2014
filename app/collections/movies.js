var Backbone = require("Backbone");
var Movie = require('models/movie');

var Movies = Backbone.Collection.extend({
    model: Movie,

    resetSelected: function() {
        this.each(function(model) {
            model.set({"selected": false});
        });
    },

    selectById: function(id) {
        this.resetSelected();

        var movie = this.get(id);

        movie.set({
            "selected": true
        });

        return movie.id;
    },

    randomizeOrder: function() {
      //_suffleArray(this.collection);
      this.collection.reset(this.collection.shuffle(), {silent: true});
    },

    /*
    // Fisher-Yates shuffle
    _suffleArray: function(array) {
      for(var i = array.length-1; i > 0; i--) {
        var j = Math.floor(Math.random()*(i+1));
	var temp = array[i];

	array[i] = array[j]
	array[j] = temp;
      }

      return array;
    }
    */
});

module.exports = Movies;
