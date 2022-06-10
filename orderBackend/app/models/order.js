const mongoose = require('mongoose')
const { Schema } = mongoose
const orderSchema = new Schema({
    order_id:{
        type:String,
        required:true,
        unique:true,
        dropDups: true
    },
    item_name: {
        type: String,
        required:true
    },
    cost: {
        type: String,
    },
    order_date:{
        type:String,
    },
    delivery_date:{
        type:String
    }
  
})
const Order = mongoose.model('Order', orderSchema)
orderSchema.index({'order_id':1},{unique:true});


module.exports = {
    Order
}