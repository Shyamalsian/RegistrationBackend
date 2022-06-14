const mongoose = require('mongoose')
// mongoose.connect('mongodb://localhost:27017/internRegister')
mongoose.connect('mongodb+srv://Shyamal:shyamal@cluster0.geim6.mongodb.net/?retryWrites=true&w=majority')
.then(()=>{
    console.log("Connection successfull")
})
.catch(()=>{
    console.log("Connection Unsuccessfull")
})