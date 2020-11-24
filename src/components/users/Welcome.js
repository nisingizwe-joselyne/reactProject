import React , {useState} from 'react';
import '../../css/tailwindcss.css';

import {useHistory} from 'react-router-dom';
function Welcome(){
    const[localUsers,setLocalusers]= useState('');
    const user=localStorage.getItem("username");
    let history=useHistory('');
    const Logout=()=>{
      localStorage.removeItem('username');
      history.push('/user-login');
    }
    if(!user){
        history.push('/user-login')
    }
    return(
        <>
        <div>
            <p>Welcome to our admin page<span className="bg-green-300">{user}</span></p>
           <br/>
           <a>CREATE POST</a>
            <button onClick={Logout}>Logout</button>
        </div>
    </>
    )
}
export default Welcome;