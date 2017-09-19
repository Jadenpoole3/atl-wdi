// app.js
const express = require('express');
//save an express module as 'app'
const app = express();
const hbs = require('hbs');


app.set('view engine', 'hbs');
app.set('views', './views');

app.get('/', (req, res) => {
res.send('Welcome to Pizza Express');
});

app.get("/topping/:type", (req, res, next) => {
    const type = req.params.type;
    res.send(`${type} pizza! Good choice.`)
 })

 app.get('/order/:amount/:size', (req, res, next) => {
    const amount = req.params.amount;
    const size = req.params.size;
         res.send(`${amount} ${size} Your order for pizza will be ready in 1 minute ` );
     });





const PORT = 3000;
// tells the server to listen for requests on port 3000
app.listen(PORT, function(){
  console.log("==========================")
  console.log('LISTENING ON PORT ' + PORT);
  console.log("==========================")
});
