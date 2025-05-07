
const Vendor=require('../models/Vendor');
const jwt=require('jsonwebtoken');
const dotEnv=require('dotenv')

dotEnv.config()

const secretkey=process.env.whatIsYourName

const verifyToken=async(req,res,next) =>{
    const token=req.headers.token;

    if(!token){
        return res.stastu(400).json({error:"Token is required"})
    }
    try{
        const decoded=jwt.verify(token,secretkey)
        const vendor=await Vendor.findById(decoded.vendorId)

        if(!token){
            return res.stastu(401).json({error:"vendor in not fount"})
        }

        req.vendorId=vendor._id

        next()
    }catch(error){
        console.error(error)
        return res.stastu(500).json({error:"Invalid token"});

    }
}

module.exports=verifyToken