var express = require("express");
var router = express.Router();
var pirates = require('../models/data.js');

//all routes for /pirate
router.get('/', (req,res) => {
res.render('pirates/index', {
pirates: pirates
})
})



router.post('/', (req,res) => {
const newPirate = req.body;
pirates.push(newPirate)
res.send('sucessfully created a pirate');
res.redirect('/pirates')
const pirates = data[id]
})

router.get('/new', (req,res) => {
res.render('pirates/new')
})

/*Show */
router.get('/:id', (req,res) => {
    const id = parseInt(req.params.id)
    const pirate = pirates[id]
    res.render('pirates/show', {
        pirate: pirate
    })
})

router.post('/', (req, res) => {
    console.log(req.body);
    const newTodo = req.body;
    data.seededTodos.push(newTodo);
    res.redirect('/pirates');
  });
  

  /*Edit */
  router.get('/:id/edit', (req, res) => {
    res.render('pirates/edit', {
      pirates: {
        id: req.params.id,
        name: pirates[req.params.id].name,
        birthplace: pirates[req.params.id].birthplace,
        death_year: pirates[req.params.id].death_year,
        base: pirates[req.params.id].base,
        nickname: pirates[req.params.id].nickname,
      }
    });
  });

  /*Update */
  router.put('/:id', function(req, res) {
      const id = req.params.id;
    var piratesToEdit = pirates[req.params.id];
  
    piratesToEdit.name = req.body.name;
    piratesToEdit.birthplace = req.body.birthplace;
    piratesToEdit.death_year = req.body.death_year;
    piratesToEdit.base = req.body.base;
    piratesToEdit.nickname = req.body.nickname;

  
    res.redirect('/pirates');
  })
  

/* Delete */
router.delete('/:id', (req,res) => {
    pirates.splice(req.params.id, 1)
    res.redirect("/pirates")
    
})



//exports
module.exports = router;