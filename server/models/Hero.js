const mongoose = require('mongoose')
const heroSchema = new mongoose.Schema({
    title:String,
    subtitle:String,
    resumeUrl:String,
    socials:{
        github:String,
        linkedIn:String,
        twitter:String
    }
},{timestamps:true})

module.exports= mongoose.model('Hero',heroSchema)