const express = require('express');
var router = express.Router();


router.get('/', (req,res)=> {
    res.render("invoices/addOrEdit",{
        viewTitle: "Add Invoices"
    });
});

module.exports = router;