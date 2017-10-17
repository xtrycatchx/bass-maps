'use strict'
/**
 * Paul Sydney Orozco (@xtrycatchx)
 * 
 * Map displays for data from BASS server
 * 
 */
const express = require('express');
const path = require('path');
const app = express();

app.set('port', 3000);
app.use(express.static(path.join(__dirname, 'public')));

const server = app.listen(app.get('port'), function() {
  const port = server.address().port;
  console.log('BASS Mapper started on port ' + port);
});
