var express = require('express');
var logger = require('morgan');

var path = require('path');

var app = express();
app.set('port', (process.env.PORT || 5000));
app.use(logger("dev", {immediate: true, format: 'dev' }));

app.get('/', function(req, res){
  var html = path.resolve(__dirname + '/../index.html');
  res.sendFile(html);
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});

