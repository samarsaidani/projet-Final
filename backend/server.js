const express = require('express');
const DBconnect = require('./config/connectDB');
const BookRouter = require('./routes/bookRoute');
const UserRoute = require('./routes/userRoute');
const OrderRoute = require('../backend/routes/orderRoute')
var bodyParser = require('body-parser');


// const whishlistRoute = require('./routes/whishlistRoute');
const app = express()
require('dotenv').config()
const port = process.env.PORT ;

DBconnect()

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true })); //importation mta3 data apartir formulaire
app.use('/public',express.static("public")) //fi dossier public mawjoud kol chay static 
app.use('/book',BookRouter)
app.use('/api',UserRoute)
app.use('/order',OrderRoute)









app.listen(port,(err)=>{
    if(err){
        console.log(err);
    }
    console.log(`server run in : ${port}`);
})