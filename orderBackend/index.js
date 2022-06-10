const express = require('express')
// const mongoose = require('./config/database')
const{mongoose} = require('./config/database'); // object destructuring es6
var cors = require('cors')
const port=5000
const { orderRouter } = require('./app/controllers/orderController')
const app = express()
app.use(cors())
app.use(express.json())
app.get('/', (req, res) => {
    res.send('Welcome to the  site')
})
app.use('/orders',orderRouter)
app.listen(port, function(){
    console.log('listening on port', port);
});

