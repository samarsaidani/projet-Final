const express = require('express');
const { isAuth } = require('../middelWares/isAuth');
const orderBook = require('../models/order')
const orderRoute = express.Router();


// create order 

orderRoute.post('/createorder',isAuth,(req,res)=>{
    const {id} = req.user
   const { bookId , Quantite,adress,paymentIntent,orderStatus }=req.body;
    // nesna3 kima card , selon card tsir lcreation mta3 order 
   const newOrder = new orderBook({ bookId , Quantite,adress,paymentIntent,orderStatus,
        
    orderby:id})
   newOrder.save()
   .then((rslt)=>{
    res.status(200).json({msg : "order create",rslt})
})
.catch((err)=>{
    console.log(err)
    res.status(500).json({msg : 'error'})
})


})


// delete order
orderRoute.delete('/deletOrder/:id',(req,res)=>{
    const {id}=req.params;
    orderBook.deleteOne({_id:id})
    .then((rslt)=>{
        res.status(200).json({msg : "order delete :("})
    })
    .catch((err)=>{
        res.status(500).json({err})
    })
})

module.exports =orderRoute