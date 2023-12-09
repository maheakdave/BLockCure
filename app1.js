const router = require('./routes/router.js');
const express = require('express');
const path = require('path')
require('dotenv').config();
const bodyparser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect(process.env.URI);
app = express();
const PORT = process.env.PORT;

app.set('view engine','ejs');
app.set('views',path.resolve('./views'));
app.use(bodyparser.urlencoded({extended:false}));
app.use('/',router);

app.listen(PORT,()=>console.log("Server Listening on PORT:"+PORT));
