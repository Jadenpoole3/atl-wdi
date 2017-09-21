// app.js
const express = require('express');
//save an express module as 'app'
const app = express();
const hbs = require('hbs');
const controllerTopping = require('./controller/topping.js');
const controllerOrder = require('./controller/order.js');
const controllerIndex = require('./controller/index.js')

app.set('view engine', 'hbs');
app.set('views', './views');

app.get('/topping', controllerTopping);
app.get('/order', controllerOrder);
app.use('/', controllerIndex);






const PORT = 3000;
// tells the server to listen for requests on port 3000
app.listen(PORT, function(){
  console.log("==========================")
  console.log('LISTENING ON PORT ' + PORT);
  console.log("==========================")
});
