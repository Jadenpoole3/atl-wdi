const express = require('express');
const router = express.Router();
const data = require('../data.js')

/* INDEX TODOS */
router.get('/', function(req,res) {
 
  
    res.render('todos/index', {
      todos: data.seededTodos
    });
  });

/* New Todos Page */
router.get('/new', (req,res) => {
  res.render('todos/new');
})

/* Show Todos */
router.get('/:id', (req,res) => {
const id = parseInt(req.params.id);
const todo = data.seededTodos[id];

if(!todo){
  res.render('todos/show', {
    error: "No to-do found with this ID"
  })

} else {
res.render('todos/show', {
  todo: todo

})
}

})

/* Edit todos */ 
router.get('/:id/edit',(req, res) => {
  res.render('todos/edit', {
    todo: {
      id: req.params.id,
      description: data.seededTodos[req.params.id].description,
      urgent: data.seededTodos[req.params.id].urgent,
    }
  });
});

/* Update todos */
router.put('/:id', function(req, res) {
  var todoToEdit = data.seededTodos[req.params.id];

  todoToEdit.description = req.body.description;
  todoToEdit.urgent = req.body.urgent;

  res.redirect('/todos');
})





/* Delete Todos*/
router.delete('/:id', function(req, res) {
  data.seededTodos.splice(req.params.id, 1); // remove the item from the array

  res.redirect('/todos');  // redirect back to the index route
});




router.post('/', (req,res) => {
  console.log(req.body);
  const newTodo = req.body;

  data.seededTodos.push(newTodo);

  res.send('Sucessfully created a todo');
  res.redirect('/todos');

})

  module.exports = router;