import React,{useState} from 'react';
import Logo from '../image/STAND_LOGO.png';
// import {
//     Navbar
// } from 'uikit-react';

function Navbar(){
  return(
 <div className="container">
 <nav className="bg-gray-300 flex">
   <div className="w-3/5">
     <img src={Logo} alt="image" width="100"  className="px-6"/>
   </div>
   <div className="w-2/5 p-4 flex gap-4">
     <button className="rounded-lg bg-gray-700"><a href="#" className="text-sm text-white p-2">Home</a></button>
     <button className="rounded-lg bg-gray-700"><a href="#" className="text-sm text-white p-2">about us</a></button>
     <button className="rounded-lg bg-gray-700"><a href="#" className="text-sm text-white p-2">our services</a></button>
     <button className="rounded-lg bg-gray-700"><a href="#" className="text-sm text-white p-2">contact us</a></button>
   </div>
 </nav>
 {/* navbar */}
 
    
    </div>
      )
}

export default Navbar;