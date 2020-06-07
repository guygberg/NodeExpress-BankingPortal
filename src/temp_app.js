const fs = require('fs');
const express = require('express');
const app  = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static('public'))

app.get('/',function(req,res){

    res.render("index", {title:'Index'});
   });