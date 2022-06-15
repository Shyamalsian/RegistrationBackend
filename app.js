const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000
const User = require('./routes/user')
// const bodyParser = require('body-parser')
app.use(helmet())
app.use(cors({ origin: '*' }))
require('./model/db')

app.options('*', cors()); 
app.use(express.json())

app.use('/registrationFrontend',User)

app.listen(port,()=>{
    console.log("Listining on port "+port)
})