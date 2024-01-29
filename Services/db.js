const mongoose = require('mongoose')


mongoose.connect('mongodb://localhost:27017/NewContact')

const contact = mongoose.model('newcontact',{
    id:String,
    name:String,
    email:String,
    phone:String,
    city:String,
    street:String,
    zipcode:String
})

module.exports ={
    contact
}