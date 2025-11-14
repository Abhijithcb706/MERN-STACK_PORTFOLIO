const express = require('express')
const router = express.Router()

const{getHero,upsertHero}=require('../controllers/heroControllers')


module.exports=express.Router