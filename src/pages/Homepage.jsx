import { useNavigate } from "react-router-dom";
import {toast} from "react-hot-toast"
import { FaArrowAltCircleRight } from "react-icons/fa";
import './Homepage.css'

function Homepage(){
    const navigate=useNavigate();

    async function logout(){
        try{
            
            const response = await fetch(`http://localhost:4000/logout`, {
                method:"GET",
                headers:{
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            })

            const data=await response.json();

            if(data.success){
                toast.success("Logged Out")
                navigate('/');
            }
            else{
                toast.error("Errors while logging out")
            }
        }
        catch(e){
            console.log(e);
        }
    }
    return (
        <div className="w-[100vw] h-[100vh] overflow-x-hidden bg-gray-100 flex flex-col items-center">
            
            <div className="flex flex-col lg:flex-row gap-y-1 items-center justify-center lg:justify-between max-w-[1200px] w-[80%] h-[15%]">
                <div className="flex gap-x-5 justify-center items-center">
                    <img src="./public/image.png" className="rounded-full w-10 h-10" />
                    <p className="text-2xl lg:text-3xl">TechShield</p>
                </div>
                <div className="flex gap-x-10">
                    <p className="text-2xl lg:text-3xl cursor-pointer hover:underline hover:underline-offset-8">About us</p>
                    <p className="text-2xl lg:text-3xl cursor-pointer hover:underline hover:underline-offset-8" onClick={()=>{navigate('/login')}}>Logout</p>
                </div>
            </div>

            <div className="flex items-center justify-center lg:justify-between max-w-[1200px] w-[80%] h-[85%]">
                <div className="flex flex-col gap-y-5  w-[50%]">
                    <div className="text-xl lg:text-3xl font-light animate-fadeIn1">Stay Protected! <br />Subscribe for instant updates on your product’s vulnerabilities and keep your devices safe.</div>
                    <div className="text-xl lg:text-3xl font-light animate-fadeIn2">Act Now and Stay Secure! </div>
                    <div className="flex gap-x-5 items-center flex-col lg:flex-row animate-fadeIn3">
                        <div className="bg-black text-white hover:bg-white hover:text-black transition duration-300 px-4 py-2 lg:text-2xl rounded-lg flex items-center gap-x-3 cursor-pointer hover:drop-shadow-xl" onClick={()=>{navigate('/addemail')}}>
                            <p>Subscribe</p>
                            <FaArrowAltCircleRight />
                        </div>
                        <p className="lg:text-2xl text-gray-800 font-bold underline cursor-pointer hover:text-gray-600 transition duration-200">More info</p>
                    </div>
                </div>
                <img src="pass.png" className="hidden md:block md:w-[500px]"/>
            </div>
        </div>
    )
}

export default Homepage;

{/* <button className="bg-red-500 text-white font-bold text-xl p-1 px-2 rounded-md" onClick={logout}>LOG OUT</button> */}