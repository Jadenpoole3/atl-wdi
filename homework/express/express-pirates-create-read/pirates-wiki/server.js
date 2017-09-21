
var express     = require('express');
var hbs         = require('hbs');

/* app settings*/
var app         = express();
var port        = process.env.PORT || 3000;






/*Views*/
app.set('view engine', 'hbs');


var pirateController = require('./controllers/pirates.js');
app.use("/pirates", pirateController);

/* HOME */
app.get('/', function(req,res) {
  res.send('This is our Home Page');
});



// Start server
app.listen(port, function() {
  console.info('Server Up -- Ready to serve hot todos on port', port,"//", new Date());
});