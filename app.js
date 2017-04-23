'use strict'
/**
 * Paul Sydney Orozco (@xtrycatchx)
 * 
 * Map displays for data from BASS server
 * 
 */
var express = require('express');
var path = require('path');
var app = express();

app.set('port', 3000);
app.use(express.static(path.join(__dirname, 'public')));

var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('BASS Mapper started on port ' + port);
});