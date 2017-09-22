const express = require('express');
const router = express.Router();
const data = require('../data.js');

/* Index todonts */
router.get('/',(req,res) => {
    res.render('todonts/index', {
        todonts: data.seededtoDonts
    });
});


/* New todonts Page */
router.get('/new', (req,res) => {
    res.render('todonts/new');
})

/* Show To Donts */
router.get('/:id', (req,res) => {
    const id = parseInt(req,res);
    const todonts = data.seededtodonts;

    if(!todonts){
        res.render('todonts/show', {
          error: "No to-do found with this ID"
        })
      
      } else {
      res.render('todonts/show', {
        todonts: todonts
      
      })
      }
      
      })

      router.post('/', (req, res) => {
        console.log(req.body);
        const newTodonts = req.body;
        data.seededTodonts.push(newTodonts);
        res.redirect('/todonts');
      });

/* Edit todonts */
router.get('/:id/edit', (req,res) => {
    res.render('todonts/edit', {
        todonts: {
            id: req.params.id,
            description: data.seededtodonts[req.params.id].description,
            urgent: data.seededtodonts[req.params.id].urgent,
        }
    });
})

/* Update todos */
router.put('/:id', function(req, res) {
    var todontsToEdit = data.seededtodonts[req.params.id];
  
    todontsToEdit.description = req.body.description;
    todontsToEdit.urgent = req.body.urgent;
  
    res.redirect('/todonts');
  })
  
  
  
  
  
  /* Delete todonts*/
  router.delete('/:id', function(req, res) {
    data.seededtodonts.splice(req.params.id, 1); // remove the item from the array
  
    res.redirect('/todonts');  // redirect back to the index route
  });

module.exports = router;