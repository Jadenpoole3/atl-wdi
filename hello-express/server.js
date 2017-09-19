const express = require('express');
const app = express();
const hbs = require('hbs');

app.set("view engine", "hbs");
app.use(express.static(__dirname + '/public'));


app.get('/greetings', (req, res) => {
  console.log(req.query);

  res.render("greetings", {
    data: req.query.saying,
    name: "Jaden"
  })
})

app.get('/favorite-foods', function(req, res) {
    var favorite = [
        "Jeni's Almond Butter ice cream", 
        'Tacos from Superica', 
        'A Breakfast Sandwich from Gjelina to go in Venice', 
        'Croissants from Bottega Louie in Downtown Los Angeles', 
        'Pizza from Little Star in San Francisco'];

    res.render('favorite-foods', {
        data: favorite
    
    });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log("Express is listening on port ", PORT);
});