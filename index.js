const express=require("express")
const dotEnv=require('dotenv')
const mongoose=require('mongoose')
const vendorRoutes=require('./routes/vendorRoutes');
const bodyParser=require('body-parser')

const app=express()

const PORT=4000;

dotEnv.config();

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("MongoDB connected successfullly"))
.catch((error)=>console.log(error))

app.use(bodyParser.json())
app.use('/vendor',vendorRoutes);
app.listen(PORT, ()=>{
    console.log(`Server started and running at ${PORT}`)
})
app.use('/home', (req,res)=>{
     res.send('<h1>Hello world</h1>')
})
app.use('/home', (req,res)=>{
    res.send('<h1>Hello world</h1>')
})