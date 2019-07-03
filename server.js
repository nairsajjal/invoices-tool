require('./models/db');

const express = require('express');

const invoiceController = require('./controllers/invoiceController');

var app = express();

app.listen(3000, ()=>{
    console.log("Server created at port 3000");
})

app.use('/invoice',invoiceController);