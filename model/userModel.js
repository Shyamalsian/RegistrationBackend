const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    id:{
        type:String,
        required:true
    },
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    // avatar:{
    //     type:String
    // }
})

const userList = new mongoose.model('userList',schema)
module.exports = userList