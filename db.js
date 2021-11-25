const mongoose = require('mongoose');

var mongoURL = 'mongodb+srv://Abhi:123@cluster0.hpfpm.mongodb.net/mern-food-order-app'

mongoose.connect(mongoURL, {useUnifiedTopology: true, useNewUrlParser: true});

var db = mongoose.connection

db.on('connected', ()=>{
    console.log('Mongo DB connect successfully')
})

db.on('error', ()=>{
    console.log('Mongo DB error')
})

module.exports = mongoose