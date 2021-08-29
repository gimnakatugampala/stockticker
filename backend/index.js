const express = require('express')
const morgan = require('morgan')
const axios = require('axios')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(morgan('dev'))

app.get('/',(req,res) =>{
    res.json({
        message:'Stock API'
    })
})


const port = process.env.PORT || 5000;

app.listen(port,() =>{
    console.log(`Listening at ${port}`)
})