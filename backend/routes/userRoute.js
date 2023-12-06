const express = require('express')
const { register, login, rating, wishs } = require('../handlers/User')
const { isAuth } = require('../middelWares/isAuth')


const UserRoute = express.Router()

UserRoute.post('/register',register)
UserRoute.post('/login',login)

//user rate a book 
UserRoute.put('/rate',isAuth,rating)

// add  book in wishlist
UserRoute.put('/wish',isAuth,wishs) 


module.exports = UserRoute 
