const express = require('express');
const cors = require('cors')
const logic = require('./Services/logics')

const contactServer= express()


contactServer.use(cors({
    origin:'http://localhost:3000'
}))


contactServer.use(express.json())

contactServer.listen(8000,()=>{
    console.log("contactServer listening on the port 8000");
})


contactServer.get('/get-all-contact',(req,res)=>{
    logic.getAllContacts().then((response)=>{
        res.status(response.statusCode).json(response)
    })

})

contactServer.post('/add-contact',(req,res)=>{
    logic.addContacts(req.body.id,req.body.name,req.body.email,req.body.phone,req.body.city,req.body.street,req.body.zipcode).then((response)=>{
        res.status(response.statusCode).json(response)

    })
})


contactServer.get('/get-an-contact/:id',(req,res)=>{
    logic.getAnContact(req.params.id).then((response)=>{
        res.status(response.statusCode).json(response)
    })

})

contactServer.delete('/delete-contact/:id',(req,res)=>{
    logic.deleteAnContact(req.params.id).then((response)=>{
        res.status(response.statusCode).json(response)

    })
})

contactServer.post('/update-an-contact/:id',(req,res)=>{
    logic.updateContact(req.params.id,req.body.name,req.body.email,req.body.phone,req.body.city,req.body.street,req.body.zipcode).then((response)=>{
        res.status(response.statusCode).json(response)
    })

})