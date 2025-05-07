
const Firm=require("../models/Firm");
const Vendor=require('../models/Vendor');
const multer=require('multer')


const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, 'uploads/');
    },
    filename: function(req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload=multer({storage:storage})

const addFirm=async(req,res)=>{
    try{
    const {firstName,area,category,offer}=req.body

    const image=req.file? req.fille.filename:undefined;

    const vendor =await Vendor.findById(req.vendorId);
    if(!vendor){
    res.status(404).json({message:"Vendor not found"})
    }

    const firm=new Firm({
    firstName,area,category,offer,image,vendor:vendor._id
    })

    const savedFirm=await firm.save()

    vendor.firm.push(savedFirm)

    await vendor.save()

    return res.status(200).json({message:'Firm Added successfully'})

    }catch(error){
        console.error(error)
        res.status(500).json("Internal server error")
    }


}

module.exports={addFirm:[upload.single('image'),addFirm]}