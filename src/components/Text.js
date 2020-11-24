import React, { useState } from 'react';
import '../css/tailwindcss.css';
import {faenvelopesquare} from "react-icons/fa";
import axios from 'axios';
// import {FaTwitter} from "react-icons/fa";
// import {IconContext} from "react-icons";
// import {FaComment} from "react-icons/fa";

function  Text(){
    const[mesage,setMesage]=useState('');
  const[message,setMessage]=useState('');
   const[loading,setLoading]=useState(false);
    const handleForm=(e)=>{
        setLoading(true);
        e.preventDefault();
   const data={
        "mesage":mesage,
    }
    axios.post("http://127.0.0.1:8000/user-creation/",data)
        .then((res)=>{
            console.log(res.data)
          setTimeout (()=>{
          setLoading(false);
        setMessage("message sent successfully");
    },2000);
    })
        .catch((err)=>{
            console.log(err)
            setLoading(false);
            setMessage("sending message failed");
        })
}
    return(
        <div className="container-fluid bg-blue-500">
       <div className="main  shadow-xl">
        <nav className="flex bg-blue-500 p-2">
            <div className="w-3/5">
               <h1 className="text-4xl text-white font-bold">TextMagic</h1> 
               
                </div> 
           <div className="w-2/5 flex">
               <p className="text-white font-semibold">Balance:76.5$</p>
           <button className="bg-blue-200 border-solid p-2">Buy Credit</button>
           
           </div>
            </nav>
            {/* end nav */}
            
          {/* content */}
        <div className="flex p-12 bg-white">
            <div className="w-1/5">
            {/* icons */}
            <div className=" flex flex-wrap p-2">
            {/* <faenvelopesquare/>
            <IconContext.Provider>
             <FaTwitter /><span className="text-blue-400">Compose</span><br/>
            </IconContext.Provider> 
            <IconContext.Provider>
             <FaComment /><span className="text-blue-400">Compose</span><br/>
            </IconContext.Provider> */}
            <ul>
           <li><span className="text-blue-400">Compose</span><br/></li><br/><br/>
           <li><i class="fas fa-comment-alt"></i>   <span className="text-black">messages</span></li><br/><br/>
                                               
           <li><i class="fas fa-id-card"></i>     <span className="text-black">Scheduled</span></li><br/><br/>
           <li><i class="far fa-calendar-minus"></i><span className="text-black">Contacts</span></li><br/><br/>
           <li><i class="fas fa-history"></i><span className="text-black">templates</span></li><br/><br/>
           <li> <i class="fas fa-history"></i><span className="text-black">Lookup</span></li><br/><br/>
           <li> <i class="fas fa-history"></i><span className="text-black">services</span></li><br/><br/>
           <li> <i class="fas fa-history"></i><span className="text-black">Account</span></li><br/><br/>
           <li><i class="fas fa-history"></i><span className="text-black">Reporting</span></li><br/><br/>
           <li><i class="fas fa-history"></i><span className="text-black opacity-10">Help & support</span></li>
            </ul>
            </div>
            </div>
            {/* second division */}
            <div className="w-3/5">
    <div className="bg-gray-200 p-4">{message}</div>
            <h1 className="font-semibold text-black text-xl px-4">New Message</h1>
            {/* the inside two division */}
            <div className="flex">
            <div className="w-2/3">
             <h2 className="text-sm text-black py-8 px-12">To</h2>
            <input type="text" name="message" className="w-full shadow-xl"/>
  {/* <div class="max-w-sm w-full lg:max-w-full lg:flex">
  <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style="background-image: url('/img/card-left.jpg')" title="Woman holding a mug">
  </div>
  
     </div> */}
         <p><span className="text-black font-semibold text-xl">From</span><span className="opacity-25">Default sender settings recomended</span></p>
           <br/>
           <br/>
           <p>message</p>
           <input type="text" name="mesage" className="w-full shadow-xl"/>
           <br/>
           <br/>
           <br/>
           <p className="text-right opacity-25">characters:91.443|parts:43|cost:56$</p>
           <br/>
           <br/>
           <br/>
           <br/>
           <button className="text-blue-400">Schedule message</button>
           <p className="text-right opacity-25">Preview message</p>
  

            </div>
            <div className="w-1/3">
            <ul className="text-center">
           <li><span className="text-blue-400">Compose</span><br/></li><br/><br/>
           <li><i class="fas fa-comment-alt"></i>   <span className="text-blue-400">Contact</span></li><br/><br/>
                                               
           <li><i class="fas fa-id-card"></i>     <span className="text-blue-400">lists</span></li><br/><br/>
           <li><i class="far fa-calendar-minus"></i><span className="text-blue-400">frequently sent</span></li><br/><br/><br/><br/>
           <li><i class="fas fa-history"></i><span className="text-blue-400">sender settings</span></li><br/><br/><br/><br/>
           <li> <i class="fas fa-history"></i><span className="text-blue-400">insert templates</span></li><br/><br/>
           <li> <i class="fas fa-history"></i><span className="text-blue-400">insert tag</span></li><br/><br/>
           <li> <i class="fas fa-history"></i><span className="text-blue-400">Attach file</span></li><br/><br/>
           
            </ul>
            <button onClick={handleForm} className="bg-green-600 text-white p-2 rounded-lg text-righ">{loading?<p>please wait</p>:<p>Send</p>}</button>
            </div>
            </div>
            </div>
            <div className="w-1/5"></div>
        </div>
        </div>
        </div>
    )
}
export default Text;