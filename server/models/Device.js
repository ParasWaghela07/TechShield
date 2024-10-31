const mongoose=require('mongoose');

const deviceSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('deviceSchema',deviceSchema);

