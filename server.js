require('./models/db');

const express = require('express');

var app = express();

app.listen(3000, ()=>{
    console.log("Server created at port 3000");
})