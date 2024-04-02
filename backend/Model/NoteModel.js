const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema({
    title : {
        type : String ,
        required : true
    } ,

    description : {
        type : String,
        required : true
        
    },
    color : {
        type : String,
        require : true
    }
    


})

module.exports = mongoose.model('Note',noteSchema)