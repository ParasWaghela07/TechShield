const express=require('express');
const router=express.Router();

const {login}=require('../controllers/login');
const {signup}=require('../controllers/signup');
const {auth}=require('../middlewares/auth');
const {logout}=require('../controllers/logout');
const {AddDeviceName}=require('../controllers/adddevicename');


router.post('/login',login);
router.post('/signup',signup);
router.get('/checkUserCookie',auth,(req,res)=>{
    res.json({
        success:true,
        message:"WELCOME",
    })
})

router.get('/logout',logout);

router.post('/AddDeviceName',AddDeviceName);
module.exports=router;