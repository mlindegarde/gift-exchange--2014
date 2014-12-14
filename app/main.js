var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');

Backbone.$ = $;
Backbone._ = _;

var UsersRouter = require('routers/users');

$(document).ready(function() {
  console.log('Init app ...');

  var router = new UsersRouter({el: $('#users') });

  Backbone.history.start({
    pushState: true,
    root: '/'
  });
});

