
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
                type:String,
                enum:['veg','non-veg']
            }
        ]
    },
    region:{
        type:[
            {
                type:String,
                enum:['south-India','north-India','chinese','bakery']
            }
        ]
    },
    offer:{
        type:String,

    },
    image:{
        type:String
    },
    vendor:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'vendor'
        }
    ]
})

const Firm=mongoose.model('Firm',firmShema)

module.exports=Firm