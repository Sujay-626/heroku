const mongoose = require('mongoose');
const u_schema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    phno:{
        type:Number,
        required:true
    },
    admin_id:{
        type:String
    }
},{collection:'sample'});

module.exports= mongoose.model('schema',u_schema);
