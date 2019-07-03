const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/InvoiceDB', {useNewUrlParser: true} ,(err)=> {
    if(!err) { console.log("Mongodb Connected")}
    else{console.log("Connection failed" + err)}

});

require('./invoices.model');