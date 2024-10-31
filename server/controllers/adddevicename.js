const deviceSchema=require('../models/Device');

exports.AddDeviceName=async(req,res)=>{
    try{
        const {devicename}=req.body;

        await deviceSchema.create({name:devicename});

        res.status(200).json({
            success:true,
            message:"Device Added Successfully"
        })

    }
    catch(e){
        return res.status(500).json({
            success:false,
            message:"Device Name Adding failed",
            error:e
        })
    }
}