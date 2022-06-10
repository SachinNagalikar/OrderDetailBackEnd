const express = require('express')
const router = express.Router()
const { Order } = require('../models/order')

router.get('/',(req, res) => {
    Order.find()
        .then((order) => {
            res.send(order)
        })
        .catch((err) => {
        res.send(err)
    })
})

router.get('*', (req, res) => {
    console.log(req.query,"get******")
    const id = req.query
    console.log(req.query.order_date,id,"get******")

    Order.find(id)
        .then((order) => {
                res.send(order)
           
        })
        .catch((err) => {
        res.send(err)
    })
})
router.get('/:order_id', (req, res) => {
    const id = req.body.order_id
    Order.findOne(id)
        .then((order) => {
            if (order) {
                res.send(order)
            } else {
                res.send({})
            }
        })
        .catch((err) => {
        res.send(err)
    })
})

router.get('/:id', (req, res) => {
    const id = req.params.id
    Order.findOne(id)
        .then((order) => {
            if (order) {
                res.send(order)
            } else {
                res.send({})
            }
        })
        .catch((err) => {
        res.send(err)
    })
})

router.post('/create', (req, res) => {
    const body = req.body
    const order = new Order(body)
    order.save()
        .then((order) => {
        res.send(order)
        })
        .catch((err) => {
        res.send(err)
    })
})

router.put('/:order_id',(req, res) => {
    console.log(req.body.order_id,"put************")
    const id = req.body.order_id
    const order = req.body
    Order.findOneAndUpdate(id, order, function (err, data) {
            if (err) {
                console.log(err)
            }

    })
        .then((data) => {
            res.send(data)
        })
        .catch((err) => {
            res.send(err)
        })
})

router.delete('/:order_id', (req, res) => {
    const id = req.params.id
    Order.findOneAndDelete(id)
        .then((order) => {
            if (order) {
                res.send(order)
            } else {
                res.send({})
            }
        })
        .catch((err) => {
            res.send(err)
        })
})
module.exports = {
    orderRouter:router
}