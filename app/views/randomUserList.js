var Backbone = require('backbone');

var RandomUserView = require('views/randomUser');

var Images = [
  'abominable-snowman.svg',
  'angel.svg',
  'ball-ornament.svg',
  'candy-cane.svg',
  'cardinal.svg',
  'christmas-tree-shadow.svg',
  'elf.svg',
  'gingerbread-man.svg',
  'mrs-clause.svg',
  'mug.svg',
  'nutcracker.svg',
  'penguin.svg',
  'reindeer-1.svg',
  'reindeer-2.svg',
  'santa-clause.svg',
  'snowflake.svg',
  'snowman.svg',
  'stocking.svg'
];

var RandomizedUserList = Backbone.View.extend({
  tagName: 'ul',

  initialize: function(options){
    this.router = options.router;
  },

  render: function() {
    var that = this;

    var imageList = Images.slice(0);

    var userViews = this.collection.map(function(user) {
      var selectedIndex = Math.floor(Math.random()*(imageList.length));
      var selectedImage = imageList.splice(selectedIndex, 1)[0];

      user.set('tagImage', selectedImage);
      return (new RandomUserView({model: user, router: that.router})).render().el;
    });

    this.$el.html(userViews);
    return this;
  }
});

module.exports = RandomizedUserList;