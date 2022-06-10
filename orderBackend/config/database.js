const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect('mongodb://0.0.0.0:27017/OrderManagement',{ useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
    .then(() => {
    console.log("connect to db")
    })
    .catch((err) => {
    console.log("Error connecting db",err)
    })
module.exports = {
    mongoose 
}