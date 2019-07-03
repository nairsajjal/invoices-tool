const mongoose = require('mongoose');

var invoiceSchema = new mongoose.Schema({
    invoice_number: {
        type: Number
    },
    invoice_from: {
        type: String
    },
    invoice_to: {
        type: String
    },
    date: { 
        type: String

    },
    due_date:{
        type: String
    },
    items_id: {
        type: Number
    },
    items_type: {
        type: String
    },
    items_quantity: {
        type: Number
    },
    items_price:{
        tupe: Number
    },
    items_amount: {
        type: Number
    },
    sub_total: {
        type: Number
    },
    discounts: {
        type: Number
    },
    tax: {
        type: Number
    },
    shipping: {
        type: Number
    },
    total: {
        type: Number
    },
});
mongoose.model('Invoice',invoiceSchema);