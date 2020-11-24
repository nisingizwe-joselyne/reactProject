import React,{useState,useEfffect} from 'react';
import '../css/tailwindcss.css';
import Navbar from './Navbar';
import axios from 'axios';
import '../App.css';
import {useHistory} from 'react-router-dom';

function Login(){
    const[username,setUsername]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const[loading,setLoading]=useState(false)
    const[message,setMessage]=useState('')
    let history=useHistory('');
    const handleLogin=(event)=>{
        event.preventDefault();
        
        const data={
            "username": username,
            "email": email,
            "password": password
        }
        axios.post("http://127.0.0.1:8000/user-creation/",data)
        .then((res)=>{
            console.log(res.data)
            setLoading(false);
            setMessage("login successfully");
            setTimeout(()=>{
             history.push('/user-welcome')
            },2000);
            
            // saving data in local storage
            localStorage.setItem('token',res.data.token);
            localStorage.setItem('username',res.data.username);

        })
        .catch((err)=>{
            console.log(err)
            setLoading(false);
            setMessage("login failed")
        })
    }

return(
<>
    <Navbar/>
    <div className="bgColor py-12">
  <div className="flex flex-wrap">
      <div className="w-full md:w-3/4">1</div>
      <div className="w-full md:w-1/4">
          <div className="bg-grey-100 ">
          <div className="bg-green-300">{message}</div>
              <form  onSubmit={handleLogin} className="p-6 flex-wrap rounded bg-blue-500 shadow-lg" method="post">
              <br/><br/><label>username</label>
              <input type="text"name="username" value={username} onChange={event=>setUsername(event.target.value)} className="py-3 px-3"/>
              <br/><br/> <label>email</label>
              <input type="email" name="email" value={email} onChange={event=>setEmail(event.target.value)} className="py-3 px-3"/><br/> 
              <br/><br/> <label>password</label>
             <input type="password" name="password" value={password} onChange={event=>setPassword(event.target.value)} className="py-3 px-3"/>
              <br/><br/><button type="submit" className="bg-green-500 rounded p-3">{loading?<p>please wait..</p>:<p>login</p>}</button>
        </form>
          </div>
      </div>
      <div className="w-full md:w-1/4">3</div>
  </div>
    </div>
    </>
)
}
export default Login;