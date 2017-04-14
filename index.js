var mongoose = require('mongoose');
mongoose.connect('mongodb://10.21.7.57:8008/log');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('open11111')
});