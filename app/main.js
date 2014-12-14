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
});

