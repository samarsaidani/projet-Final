const express = require('express')
const multer  = require('multer')
 const BookSchema = require('../models/book');
const { isAuth } = require('../middelWares/isAuth');
const BookRouter = express.Router();

// configuration mta3 multer 
const storage = multer.diskStorage({
    destination : (req,file,cb)=>{
     cb(null , './public/image')
    },
    filename: (req,file,cb)=>{
        cb(null , Date.now()+ file.originalname)
    }
})

const upload = multer({
    storage : storage,
    limits:{
        fileSize : 1024 * 1024 * 10
    }
})

//create book 
BookRouter.post('/create',isAuth,upload.single("img"),(req,res)=>{
    const {title,authors,description,date,price,rate}=req.body;
    const image =req.file.filename
    const newbook = new BookSchema({title,authors,description,image,date,price,rate});
    newbook.save()
    .then((rslt)=>{
        res.status(200).json({msg : "book create",rslt})
    })
    .catch((err)=>{
        console.log(err)
        res.status(500).json({msg : 'error'})
    })
})
//get all book 
BookRouter.get('/get',(req,res)=>{
    BookSchema.find({})
    .then((rslt)=>{
        res.status(200).json({msg : "total book list ",rslt})

    })
    .catch((err)=>{
       res.status(500).json({err})
    })
})


//get book by Id 
BookRouter.get('/get/:id',(req,res)=>{
    const {id}=req.params;
    BookSchema.findById({_id:id})
    .then((rslt)=>{
        res.status(200).json({msg : "book selected with success",rslt})

    })
    .catch((err)=>{
       res.status(500).json({err})
    })
})

//upDate Book by id 
BookRouter.put('/upDateBook/:id',(req,res)=>{
   const {id}=req.params ;
   const {title,authors,description,date,price,rate}=req.body;
   
    BookSchema.findByIdAndUpdate({_id:id},{title,authors,description,date,rate})
    .then((rslt)=>{
        res.status(200).json({msg : "book upDate",rslt})

    })
    .catch((err)=>{
       res.status(500).json({err})
    })
}
)


//delete book  by id 
BookRouter.delete('/delete/:id',(req,res)=>{
    const {id}=req.params;
    BookSchema.deleteOne({_id:id})
    .then((rslt)=>{
        res.status(200).json({msg : "book delete with success",rslt})

    })
    .catch((err)=>{
       res.status(500).json({err})
    })
})



// rating 



module.exports = BookRouter