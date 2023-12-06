const  mongoose  = require('mongoose');
require('dotenv').config()


const DBconnect = async()=>{

try {
    await mongoose.connect(process.env.URL)
    console.log('data connected');
} catch (error) {
    console.log(error);
    
}


}

module.exports = DBconnect ;