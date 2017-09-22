const express = require('express');
var router = express.Router();
const pirates = require('../data.js');

//Index Tools
router.get('/', (req,res) => {
res.render('/todonts/index', {

    todonts:data.seededToDonts

})
})


//NEW TODOS
router.get('/new', (req,res) => {
    res.render('/todonts/new')
})

//Show
router.get('/:id', (req,res) => {
    const id = parseInt(req.params.id);
    const todonts = data.seededTodonts[id];
    console.log(todonts);
    if (!todonts){
      res.render('todontss/show', {
        error: "No to-do found with this ID"
      })
    } else {
      res.render('todonts/show', {todo})
    }
  });
  
  router.post('/', (req, res) => {
    console.log(req.body);
    const newTodo = req.body;
    data.seededTodos.push(newTodo);
    res.redirect('/todos');
  });
  
  /* Edit TODOS*/
router.get('/:id', (req,res) => {
  res.render('todonts/edit' {
    todo: {
      id: req.params.id,
      description: data.seededTodos[req.params.id].description,
      urgent: data.seededTodos[req.params.id].urgent,
    }
});
});
  



//Update 
router.put('/:id', (req,res) => {
  const todontsEdit = data.seededToDonts[req.params.id];
  todontsEdit.description = req.body.description;
  todontsEdit.urgent = req.body.urgent;

  res.redirect('/todos');
})


// Delete
router.delete('/:id', (req,res) => {
  data.seededToDonts.splice(req.params.id, 1);
  res.redirect('/todonts');
});
