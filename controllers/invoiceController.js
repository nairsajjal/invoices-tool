const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Invoice = mongoose.model('Invoice');

router.get('/', (req,res)=> {
    res.render("invoices/addOrEdit",{
        viewTitle: "Add Invoices"
    });
});

router.post('/',(req,res)=>{
   insertRecord(req,res);
} );

router.get('/list',(req,res)=>{
    res.json('To-Be List');
    
});


function insertRecord(req, res){
    var invoice = new Invoice();
    invoice.invoice_number= req.body.invoice_number;
    invoice.invoice_from= req.body.invoice_from;
    invoice.invoice_to= req.body.invoice_to;
    invoice.date = req.body.date;
    invoice.due_date = req.body.due_date;
    invoice.sub_total = req.body.sub_total;
    invoice.discounts = req.body.discounts;
    invoice.tax = req.body.tax;
    invoice.shipping = req.body.shipping;
    invoice.total = req.body.total;
    invoice.items_id = req.body.items_id;
    invoice.types = req.body.types;
    invoice.quantity = req.body.quantity;
    invoice.amount = req.body.amount;
    invoice.price = req.body.price;
    invoice.save((err,doc) => {
        if(!err)
            res.redirect('/invoice/list');
        else{
            console.log('Error during record insertion: ' +err);
        }       
    })
}


module.exports = router;