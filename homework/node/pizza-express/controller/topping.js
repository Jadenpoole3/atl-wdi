const express = require('express');
const router = express.Router();

router.get("/:type", (req, res) => {
    const type = `${req.params.type} good pizza choice `;
    res.render("topping", {
        pep: type

    });
 });




module.exports = router;