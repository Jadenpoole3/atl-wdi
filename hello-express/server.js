const express = require('express');
const app = express();

/*app.get('/', (req, res) => {
  res.send("hello wdi12");
})

app.get('/greeting', (req, res) => {
    res.send('Hey, WDI 12!');
})

app.get('/rihanna', (req, res) => {
    res.send("Work Work work work");
}) */

  app.get('/math/:operator', function(req, res) {
      console.log(req.params)
      console.log(req.query)
      num1 = parseInt(req.query.num1)
      num2 = parseInt(req.query.num2)
      add = num1 + num2;
      if(req.params.operator === 'add') {
          res.send(`${add}`);
}else if (req.params.operator === 'subtract')

    });

const PORT = 3000;

app.listen(PORT, () => {
  console.log("Express is listening on port ", PORT);
});