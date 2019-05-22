const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const letterSchema = new Schema({
    
    author: {
        type: String,
        required: true,
        trim: true,
    },

    addressee: {
        type: String,
        trim: true,
    },

    date: {
        type: String,
    },

    context: {
        type: String,
        trim: true,
    },
   
    comments: [{ 
        body: String, 
        date: Date 
    }]
    
});

const Letter = mongoose.model("Letter", letterSchema);

module.exports = Letter;