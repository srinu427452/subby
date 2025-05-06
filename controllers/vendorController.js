
const Vendor=require('../models/Vendor');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcryptjs');



const vendorRegister=async(req,res)=>{
    const {username,email,password}=req.body;
    try{
        const vendorEmail=await Vendor.findOne({email});
        if(vendorEmail){
            return res.status(400).json("Email already taken");
        }
        const hashedPassword=await bcrypt.hash(password,10);

        const newVendor=new Vendor({
            username,
            email,
            password:hashedPassword
        });
        await newVendor.save();

        res.status(200).json({message:"Vendor registred successfully"})
        console.log("registred")

    }catch(error){
        console.error(error);
        res.status(500).json({error:"Internal server error"})
    }
}
const vendorLogin=async(req, res)=>{
    const {email,password}=req.body;
    try{
        const vendor=await Vendor.findOne({email});
        if(!vendor || !(await bcrypt.compare(password,vendor.password))){
            return res.status(401).json({error:"Invalid email or password"});
        }

        res.status(200).json({success:"Login successful"})
        console.log(email)
    }catch(error){
        console.error(error);
    }
}

module.exports={vendorRegister, vendorLogin}