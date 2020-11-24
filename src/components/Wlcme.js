import React from 'react';
import '../css/tailwindcss.css';
import Navbar from './Navbar';
import axios from 'axios';
import '../App.css';

function Wlcme(){
    return(
<>
<Navbar/>
<div className="bg-green-400">thank you for loging in to our pagee</div>
</>
    )
}
export default Wlcme;