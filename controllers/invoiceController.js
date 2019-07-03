const express = require('express');
var router = express.Router();


router.get('/', (req,res)=> {
    res.render("invoices/addOrEdit",{
        viewTitle: "Add Invoices"
    });
});

router.post('/',(req,res)=>{
   insertRecord(req,res);
} );

function insertRecord(req, res){

}
module.exports = router;