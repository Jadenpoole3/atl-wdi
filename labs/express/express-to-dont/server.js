const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser')

/* app settings */
const app = express();


const todontsController = require('./controllers/todonts')


// include the method-override package
var methodOverride = require('method-override');
//...
// after the app has been defined
// use methodOverride.  We will be adding a query parameter to our delete form named _method
app.use(methodOverride('_method'));


app.use(bodyParser.urlencoded({
    extended: true
  }));

/* Views */
app.set('view engine', 'hbs');

/* Controller */
app.use("/todonts", todontsController)


/* Home */
app.get('/', (req,res) => {
    res.send('Lets get to robbing ')
});


//Start Server 
const PORT = 3000;
app.listen(PORT, () => {
   console.log("=======================");
   console.log("LISTENING ON PORT", 3000);
   console.log("=======================");
});