const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const methodOverrides = require('method-overrides');
const todontsController = require('./controllers/todonts.js');


const app = express();
var port        = process.env.PORT || 3000;
const todontsController = require('./controllers/todonts');


app.use("/todonts", todontsController);

/*Views*/
app.set('view engine', 'hbs');

//Todonts Controller
app.use("/todonts", todontsController);


/* HOME */
app.get('/',(req,res) => {
    res.send('This is our Home Page');
  });
  