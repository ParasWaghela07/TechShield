import './App.css'
import { Routes,Route, useNavigate } from 'react-router-dom'
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Homepage from './pages/Homepage';
import AddEmail from './pages/AddEmail';
import { useEffect } from 'react';
import AddDevice from './pages/AddDevice';

function App() {
  const navigate=useNavigate();

  async function checkCookie() {
    try {
      const response = await fetch(`http://localhost:4000/checkUserCookie`, {
            method: 'GET', 
            headers: {
                'Content-Type': 'application/json' 
            },
            credentials: 'include' 
        });

        const data = await response.json(); 

        // console.log(data);

        if (data.success) {
            navigate('/homepage'); 
        }
    } catch (e) {
        console.log(e.message); 
    }
}


  useEffect(()=>{
    checkCookie();
  },[])
  return (
    <div>
    <Routes>
      <Route path="/" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/homepage" element={<Homepage/>}/>
      <Route path='/addemail' element={<AddEmail/>}/>
      <Route path='/adddevice' element={<AddDevice/>}/>
    </Routes>
  </div>
  )
}

export default App
