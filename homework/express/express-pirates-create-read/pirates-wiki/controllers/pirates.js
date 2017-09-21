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


router.get('/:id', (req,res) => {
    const id = parseInt(req.params.id)
    res.render('pirates/show')
})

//exports
module.exports = router;