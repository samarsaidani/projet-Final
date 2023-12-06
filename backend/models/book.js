const mongoose = require('mongoose') ;



const BookSchema = new mongoose.Schema({

    title:{ type: String,
        required:true},
    authors:{ type: String,
        required:true},
    description:{ type: String,
        required:true},
    image:{ type: String,
        },
    date:{ type: String,
        } ,
    price:{type: Number,
        required:true},    
    rate : [{
        star : Number ,
        ratedBy : {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'user'  //nom du model
        }
    }],
    totalRating : {type :Number,default:0 }   ,

    
})

module.exports = mongoose.model('Book',BookSchema) ;