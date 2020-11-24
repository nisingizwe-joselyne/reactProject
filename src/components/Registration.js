import React,{useState} from 'react';
import '../css/tailwindcss.css';
import Navbar from './Navbar';
import axios from 'axios';

function Signup(){
    const[first_name, setFirstname]=useState("");
    const[email, setEmail]=useState("");
    const[password, setPassword]=useState("");
    const[loading, setLoading]=useState(false);
    const[message, setMessage]=useState("");
    const handleForm =(e)=>{
        setLoading(true);
        e.preventDefault();

        const data={
            "first_name":first_name,
            "email":email,
            "password":password,
            "profile":{
                "username":"kajojo",
                "country":"Rwanda",
                "accounttype":"user",
                "gender":"female"
            }
        }
        // send data to our database
        axios.post("http://127.0.0.1:8000/account-creation/",data)
        .then((res)=>{
            console.log(res.data)
            setLoading(false);
            setMessage("account created successfully");
        })
        .catch((err)=>{
            console.log(err)
            setLoading(false);
            setMessage("account failed");
        })
    }
    return(
        <>
        <Navbar/>
        <div className="flex">
        <div className="w-1/2 px-5">
        <p className="p-2 font-bold">User creation</p>
        <div className="bg-green-300">{message}</div>
       <form onSubmit={handleForm} encType="multipart/form-data" className="p-4">
           <label>Firstname</label>
           <input type="text" name="first_name" placeholder="Enter your names" value={first_name} onChange={event=>setFirstname(event.target.value)} className="w-full border py-4 form-control"/>
           <label>Email</label>
           <input type="email" name="email" placeholder="Enter your Email" value={email} onChange={event=>setEmail(event.target.value)} className="w-full border py-4 form-control" />
           <label>password</label>
           <input type="password" name="password"  placeholder="Enter ur lastname" value={password} onChange={event=>setPassword(event.target.value)} className="w-full border py-4 form-control"/>
           <button name="" type="submit">{loading?<p>creating account...</p>:<p>Create account</p>}</button>
       </form>
        </div>
        </div>
  </>
    )
}
export default  Signup;