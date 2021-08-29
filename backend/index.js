const express = require('express')
const morgan = require('morgan')
const axios = require('axios')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(morgan('dev'))

app.get('/',(req,res) =>{

    const rp = require('request-promise');
const requestOptions = {
  method: 'GET',
  uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
  qs: {
    'start': '1',
    'limit': '5000',
    'convert': 'USD'
  },
  headers: {
    'X-CMC_PRO_API_KEY': 'b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c'
  },
  json: true,
  gzip: true
};

rp(requestOptions).then(response => {
  res.json({response})
}).catch((err) => {
  console.log('API call error:', err.message);
});

    res.json({
        message:'Stock API'
    })
})


const port = process.env.PORT || 5000;

app.listen(port,() =>{
    console.log(`Listening at ${port}`)
})