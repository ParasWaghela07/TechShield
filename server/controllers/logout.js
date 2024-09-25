
exports.logout=async function(req,res){
    try{
        return res.clearCookie('token', {
            path: '/',
            secure: true, 
            sameSite: 'None'
        }).json({
            success: true,
            message: "User Logged Out Successfully"
        });
        
    }
    catch(e){
        return res.json({
            success:false,
            message:"Errors while logging out"
        })
    }
}