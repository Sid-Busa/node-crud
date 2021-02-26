const express = require("express");
const app = express();
// require('./config/db_connection')
const user = require('./route/user')
var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/user',user)

app.set('view engine', 'ejs');

const port = 2121 

app.listen(2121,() => console.log(`app is running in ${port}`))