const express =require('express')
const router = express.Router()

const {createContact,getMessages}= require('../controllers/contactControllers')


router.post('/',createContact)
router.get('/',getMessages)


module.exports=router