const jwt=require('jsonwebtoken');
const userSchema=require('../models/User')
require('dotenv').config();

exports.auth=async(req,res,next)=>{
    try{

        let token=req.cookies.token;
        
        if(!token){
            return res.status(401).json({
                success:false,
                message:'Token Missing',
            });
        }

        try{
            const payload=jwt.verify(token,process.env.JWT_SECRET);
            // console.log("payload :- ",payload);
            const userExist=await userSchema.findById(payload.id);
            if(!userExist){
                return res.status(404).json({
                    success:false,
                    message:"User Not Found"
                })
            }

            req.payload=payload;
        }
        catch(e){
            console.log(e);
            return res.status(401).json({
                success:false,
                message:'token is invalid',
            });
        }
        next();
    }
    catch(e){
        return res.status(401).json({
            success:false,
            message:'Something went wrong, while verifying the token',
            error:error.message,
        });
    }
}