const mongoose = require('mongoose') ;
const orderSchema = new mongoose.Schema(
    {
        orders:[{
            Produit :{type : mongoose.Schema.Types.ObjectId ,
                ref:"Book"},
                Quantite:Number ,
              
                            }
        
            
        ],
        paymentIntent:{},
        orderStatus:{
            type:String,
            default:"en cour ",
            enum:[
                "en cour ",
                "traitement de commande",
                "préparation de commande",
                "livraison de commande",
                "livre"
            ],

        },
        orderby:{
            type : mongoose.Schema.Types.ObjectId,
            ref:"User"
        },
        adress: String,
        
    }
           
    
)

module.exports = mongoose.model('Orders',orderSchema) ;