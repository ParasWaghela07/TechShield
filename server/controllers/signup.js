const userSchema=require('../models/User');
const bcrypt=require('bcrypt');

exports.signup=async(req,res)=>{
    try{
        const {email,password}=req.body;
    
        const prevEntry=await userSchema.findOne({email});
    
        if(prevEntry){
            return res.json({
                success:false,
                message:"User already exist with this email id"
            })
        }
    
        let hashedPassword;
        try{
            hashedPassword=await bcrypt.hash(password,10);
        }
        catch(e){
            return res.status(500).json({
                success:false,
                message:"Error occured during hashing"
            })
        }
    
        const newUser=await userSchema.create({
            email,password:hashedPassword
        })
    
        return res.status(200).json({
            success:true,
            message:"Account Created Succuessfully"
        })
    
    }
    catch(e){
        return res.status(500).json({
            success:false,
            message:"Internal Server Error during signup",
            error:e.message
        })
    }
}
