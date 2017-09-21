const express = require('express');
const router = express.Router();



router.get('/', (req, res) => {
    const index = "Welcome to Pizza Express"
    res.render('index');
    index: index
    });
    



module.exports = router;