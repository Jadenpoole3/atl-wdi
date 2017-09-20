const express = require('express');
const router = express.Router();


      

router.get('/:size', (req, res,) => {
    const amount = `${req.params.amount} Your order for pizza will be ready in 1 minute`;
         res.render("amount",{
         order: size

         });
     });


     router.get('/:size', (req, res,) => {
        const size = `${req.params.size} 12`;
             res.render("size",{
             order: size
    
             });
         });

     module.exports = router;