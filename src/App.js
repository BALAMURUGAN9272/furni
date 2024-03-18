import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Shopsec from './Components/Shopsec';
import Aboutus from './Components/Aboutus';
import Services from './Components/Services';
import Rblog from './Components/Rblog';
import Contact from './Components/Contact';
import Login from './Components/Login';
import Signin from './Components/Signin';
import { useState } from 'react';


function App() {
  const [user,setuser] = useState(null)
  return (
      <div>
        
        <BrowserRouter>
        
        <Routes>
        {/* <Route path='/' element={<Home/>}/> */}
       <Route path='/' element={user?<Home/>:<Navigate to='/Login'/>}/>

       <Route path='/shop' element={<Shopsec/>}/>
       <Route path='/about' element={<Aboutus/>}/>
       {/* <Route path='/services' element={<Services/>}/>        */}
       <Route path='/Rblog' element={<Rblog/>}/>
       <Route path='/contact' element={<Contact/>}/>
       <Route path='/Login' element={<Login user={user} setuser={setuser}/>}/>
       <Route path='/Signin' element={<Signin/>}/>
        </Routes>
        </BrowserRouter>
       
      </div>
      );
}

export default App;
