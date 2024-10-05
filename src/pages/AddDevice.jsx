import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";




function AddDevice(){
    const navigate=useNavigate();
    return(
        <div className="w-[100vw] h-[100vh] flex flex-col items-center bg-gray-100  text-blue-950 overflow-x-hidden overflow-y-hidden">
            <div className="flex h-[18%] lg:flex-row flex-col-reverse gap-y-7 items-center justify-center lg:justify-between max-w-[1400px] w-[80%] ">
                <IoIosArrowRoundBack className="text-7xl cursor-pointer hidden lg:flex" onClick={()=>{navigate('/homepage')}}/>
                <div className="flex gap-x-5 justify-center items-center">
                        <img src="./public/image.png" className="rounded-full w-10 h-10" />
                        <p className="text-3xl">TechShield</p>
                </div>
            </div>

            <div className="h-[70%] flex justify-center items-center flex-col  max-w-[1400px] w-[80%] gap-y-20">
                <div className="flex gap-x-10">
                <p className="text-2xl md:text-3xl cursor-pointer"onClick={()=>{navigate('/addemail')}}>Email</p>
                <p className="text-2xl md:text-3xl cursor-pointer underline underline-offset-[15px]">Device</p>
                </div>
                <p className="text-xl md:text-2xl ">Add name of your device</p>
                <input type="text" className="w-[25%] p-2 text-md md:text-lg rounded-md bg-gray-300 outline-none min-w-[300px]" autoFocus/>
                <button className="bg-black text-white hover:bg-white hover:text-black transition duration-300 px-4 py-2 lg:text-xl rounded-lg flex items-center gap-x-3 cursor-pointer hover:drop-shadow-xl">Add name</button>
            </div>


        </div>
    )
}

export default AddDevice;