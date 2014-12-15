var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');

Backbone.$ = $;
Backbone._ = _;

var RoundsRouter = require('routers/rounds');

$(document).ready(function() {
  console.log('Init app ...');

  var router = new RoundsRouter({el: $('#root') });

  Backbone.history.start({
    pushState: true,
    root: '/'
  });

  // snowflake stuff
  const NUMBER_OF_FLAKES = 50;

  function randomInteger(low, high) {
    return low + Math.floor(Math.random() * (high - low));
  }

  function randomFloat(low, high){
    return low + Math.random() * (high - low);
  }

  function setAnimation(prop, value, el) {
    prop = prop[0].toUpperCase() + prop.slice(1);
    el.style['webkitAnimation' + prop] = value;
    el.style['MozAnimation' + prop] = value;
  }

  function makeFlake() {
    var maxLeft = $(window).width();

    var leafDiv = document.createElement('div');
    var image = document.createElement('img');

    image.src = '/images/snowflake' + randomInteger(1, 5) + '.svg';
    image.width = 100 * randomFloat(0.5, 1);

    leafDiv.style.top = "-100px";
    leafDiv.style.left = randomInteger(0, maxLeft) + "px";

    var spinAnimationName = (Math.random() < 0.5) ? 'clockwiseSpin' : 'counterclockwiseSpinAndFlip';
    setAnimation('name', spinAnimationName, image);

    var fadeAndDropDuration = randomFloat(30, 60) + 's';
    setAnimation('duration', fadeAndDropDuration + ', ' + fadeAndDropDuration, leafDiv);

    var spinDuration = randomFloat(6, 12) + 's';
    setAnimation('duration', spinDuration, image);

    var leafDelay = randomFloat(0, 45) + 's';
    setAnimation('delay', leafDelay, leafDiv);

    leafDiv.appendChild(image);
    return leafDiv;
  }

  var container = document.getElementById('flakes');
  for (var i = 0; i < NUMBER_OF_FLAKES; i++) {
    container.appendChild(makeFlake());
  }

  // Firefox doesn't support cross domain webfonts...
  if ('MozAppearance' in document.documentElement.style) {
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "http://dl.dropbox.com/u/534786/card/font.css";
    document.head.appendChild(link);
  }
});

