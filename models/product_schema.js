const mongoose = require('mongoose');
const p_schema = mongoose.Schema({
    p_name:{
        type:String,
        required:true
    },
    p_desc:{
        type:String,
        required:false
    },
    p_price:{
        type:Number,
        required:true
    },
    p_rating:{
        type:Number,
        required:false
    }

},{collection: 'products'});

module.exports = mongoose.model('products',p_schema)

