
const mongoose=require('mongoose');

const firmShema= new mongoose.Schema({
    firstname:{
        type:String,
        require:true,
        unique:true
    },
    area:{
        type:String,
        require:true
    },
    category:{
        type:[
            {
                type:String
            }
        ]
    }
})