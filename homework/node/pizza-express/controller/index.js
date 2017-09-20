const express = require('express');
const router = express.Router();



router.get('/:index', (req, res) => {
    const index = `${req.params.index} Welcome to Pizza Express`;
    res.render('index');
    index: index
    });
    



module.exports = router;