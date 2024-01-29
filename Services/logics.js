const db = require('../Services/db')

const getAllContacts=()=>{
    return db.contact.find().then(
        (result)=>{
            if (result) {
                return{
                    statusCode:200,
                    contacts:result
                }
                
            }
            else{
                return{
                    statusCode:404,
                    message:'contact not found'
                }
            }
        }
    )
}

const addContacts=(id,name,email,phone,city,street,zipcode)=>{
    return db.contact.findOne({id}).then((result)=>{
        if (result) {
            return{
                statusCode:404,
                message:"Contact allredy exist"

            }
            
        }else{
            const newContact = new db.contact({id,name,email,phone,city,street,zipcode})
            newContact.save()
            return{
                statusCode:200,
                message:'Contact added successfully'

            }
        }
    })
}

const getAnContact=(id)=>{
    return db.contact.findOne({id}).then(
        (result)=>{
            if (result) {
                return{
                    statusCode:200,
                    contacts:result
                }
                
            }
            else{
                return{
                    statusCode:404,
                    message:'contact not found'
                }
            }
        }
    )
}

const deleteAnContact=(id)=>{
    return db.contact.deleteOne({id}).then((response)=>{
        if (response) {
            return{
                statusCode:200,
                message:"Contact Details Deleted Successfully"
            }
            
        }else{
            return{
                statusCode:404,
                message:"There is No contact details "
            }
        }
    })
}

const updateContact=(id,name,email,phone,city,street,zipcode)=>{
    return db.contact.findOne({id}).then(
        (result)=>{
            if (result) {
                result.id=id;
                result.name=name;
                result.email=email;
                result.phone=phone;
                result.city=city;
                result.street=street;
                result.zipcode=zipcode;
                result.save()
                return{
                    statusCode:200,
                    message:"Contact details updated successfully"
                }
                
            }
            else{
                return{
                    statusCode:404,
                    message:'contact not found'
                }
            }
        }
    )
}

module.exports={
    getAllContacts,addContacts,getAnContact,deleteAnContact,updateContact
}