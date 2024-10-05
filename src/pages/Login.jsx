import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import {toast} from "react-hot-toast";
import Loader from '../components/Loader';
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";

function Signup(){

    const [loader,setloader]=useState(false);
    const [email,setemail]=useState("");

    const [pass,setpass]=useState('');
    

    const [eye1,seteye1]=useState(false);
    

    const navigate=useNavigate();

    function emailHandler(e){
       
        setemail(e.target.value);
    }

    function passhandler(e){
        setpass(e.target.value);
    }


    async function submitHandler() {
        setloader(true);
        try {
            if (pass && email) {
                const response = await fetch(`http://localhost:4000/login`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: email,
                        password:pass
                    }),
                    credentials: 'include' 
                });
    
    
                const data = await response.json(); 
    
                // console.log(data);
    
                if (data.success) {
                    navigate('/homepage');
                    toast.success("Logged In Successfully !")
                } else {
                    toast.error(data.message); 
                }
            } else {
                toast.error("All fields are required");
            }
        } catch (e) {
            console.error(e); 
            toast.error("An error occurred while sending OTP");
        }
        setloader(false);
    }





    return(
        <div className="w-[100vw] h-[100vh] flex flex-col justify-center gap-y-10 items-center bg-gray-100  text-blue-950 overflow-x-hidden overflow-y-hidden">
            <div className="flex lg:flex-row flex-col-reverse gap-y-7 items-center justify-center lg:justify-between max-w-[1200px] w-[80%] ">
                <div className="flex gap-x-10">
                    <p className="text-3xl cursor-pointer"onClick={()=>{navigate('/')}}>Signup</p>
                    <p className="text-3xl cursor-pointer underline underline-offset-[15px]">Login</p>
                </div>
                <div className="flex gap-x-5 justify-center items-center">
                    <img src="./public/image.png" className="rounded-full w-10 h-10" />
                    <p className="text-3xl">TechShield</p>
                </div>
            </div>
            <div className="flex flex-row-reverse items-center justify-center lg:justify-end gap-x-48 max-w-[1200px] w-[80%]">
                <div  className="flex justify-center flex-col gap-y-7 p-2">
                <div>
                <p className="font-semibold text-xl">Email</p>
                <input  className="bg-gray-200 p-2 rounded-md outline-none text-lg"
                type="email"
                value={email}
                onChange={emailHandler} />
                </div>

                <div>
                <p className="font-semibold text-xl">Password</p>
                <div className="flex justify-center items-center gap-x-2">
                <input className="bg-gray-200 p-2 rounded-md outline-none text-lg"
                type= {eye1 ? "text" : "password"}
                value={pass}
                onChange={passhandler} />

                {eye1?<IoEyeOutline className="text-2xl cursor-pointer" onClick={()=>seteye1(!eye1)}/> : <IoEyeOffOutline className="text-2xl cursor-pointer" onClick={()=>seteye1(!eye1)}/>}
                </div>
                </div>

                <button  className="bg-green-700 w-full text-white font-bold text-xl p-3 rounded-lg hover:bg-green-600 transition duration-200" onClick={submitHandler}>
                    Log In
                </button>

                </div>

                <img src="/login.png" alt="" className="w-[600px] hidden lg:block"/>
            </div>

        {loader && <div className="fixed top-0 right-0 left-0  flex justify-center items-center h-full bg-black bg-opacity-50 z-50 overflow-x-hidden overflow-y-hidden"><Loader/></div>}
        </div>

    )
}

export default Signup;