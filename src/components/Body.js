import React,{Component,useState,useEffect} from 'react';
import '../css/tailwindcss.css';
import jojo from '../image/temp1.jpeg';
import Navbar from '../components/Navbar.js';
import axios from 'axios';
import Footer from '../components/Footer.js';
import inclsv from '../image/inclusive.png';
import agw from '../image/agwomen.jpg';
import youth from '../image/scrnsht.JPG';
import disabled from '../image/disabled.jpg';
import girls from '../image/rural girls.jpg';
import {FaCalculator, FaFacebook, FaFacebookMessenger, FaInstagram,  FaMailBulk, FaMap, FaTwitter, FaWhatsapp} from "react-icons/fa";

import '../App.css';
function Body(){
    

    return(
        <div className="container-fluid bg-gray-700">
           <Navbar className="p-2" />
          <div class="container-fluid">
    <div class="card card-intro bg-blue-400 md:full">

      <div class="card-body white-text rgba-black-light text-center">

        
        <div class="row d-flex justify-content-center">

          
          <div class="col-md-6">

            <p class="h5 mb-2">
              Welcome to Stand for Them Website
            </p>

            <p class="mb-0">Which stand for the most vulnerable people in our society
                by developing technological solution to them.</p>

          </div>
          

        </div>
        
      </div>
      </div>

    </div>
    {/* end of heading */}

    <div class="flex p-4 gap-4">
     <div class="w-1/2 rounded-lg bg-white ">
      <h3 class="text-sm text-bold p-4 ">our vision</h3>
        <p class="p-6 text-blue-400">Building an inclusive society
        by making sure that everyone is able to access needed services
        in everyday life
        </p>
        <h3 class="text-sm text-bold p-4 ">our mission</h3>
        <p  class="p-6 text-sm text-blue-400 ">Building technological solution that is respond to the need of 
          the most vulnerable people in our society</p>
    
  </div>
  <div class="w-1/2">
    <img src={inclsv} height="50px" width="200px" class="w-full border-solid rounde-lg"/>
 </div>
     </div>  
        {/*end of first division  */}
        <div className="text-bold  text-2xl text-white text-center">Our inclusive technology focus but not limited in the following areas</div>
        <br/>
        <div className="flex gap-2">
         <div className="w-2/6 rouded-lg bg-white">
           
           <img src={agw} alt= "agribusiness" className="rounded-full "/>
           <br/>
           <div className="rounded-lg shadow-lg">
           <h2 className="text-bold bg-blue-300 rounded-lg text-center">Agriculture</h2>
           <p className="p-4 text-blue-500 text-lg">
            we believe that agriculture has the most role in our daily life
            as 70% of african people live under agriculture income so we want
            but the farmers meet with different barriers in their journey either
           in expanding their agriculture or accessing finacial services and so on
           </p>
           </div>
         </div>
         {/* <div className="w-2/8 rouded-lg bg-white">  
           <img src={youth} alt= "agribusiness" className="rounded-lg p-2"/>
           <br/>
           <div className=" rounded-lg shadow-lg">
           <h2 className="text-semibold rounded-lg text-center">Youth empowerment</h2>
           <p className="p-4 text-blue-400 text-sm">
            we believe that are the future of the world as well as future leaders 
            so we develop technological solutions that can help them to be financially i
            ndependent as well as accessing the needed services.
           </p>
           </div>
         </div> */}
         <div className="w-2/6 rouded-lg bg-white ">
           
           <img src={disabled} alt= "disabled" className="rounded-full"/>
           <br/>
           <div className=" rounded-lg shadow-lg">
           <h2 className="text-bold bg-blue-300 rounded-lg text-center">Disabled people solution</h2>
           <p className="p-4 text-blue-500 text-lg">
            we believe that agriculture has the most role in our daily life
            as 70% of african people live under agriculture income so we want
            but the farmers meet with different barriers in their journey either
           in expanding their agriculture or accessing finacial services and so on
           </p>
           </div>
         </div>
         <div className="w-2/6 rouded-lg bg-white">
           
           <img src={girls} alt= "agribusiness" className="rounded-full p-2"/>
           <br/>
           <div className=" rounded-lg shadow-lg">
           <h2 className="text-bold  bg-blue-300 rounded-lg text-center p-2">rural girls and women in code</h2>
           <p className="p-4 text-blue-500 text-lg">
            we believe that girls can do also what boys can and
            they are able to explore technology and using it in
            building solution to our society as boys do.but when it reach on girls in STEM(coding,computer maintanance) 
            the rural girls and women are not inclusive because most of the 
            technology companies are in cities so we want that rural girls ,women 
            get the access to the STEM program Especially coding,computer maintanance .
           </p>
          </div>
         </div>

        </div>
        {/* second div end */}
  
      {/* footer */}

      
<footer class="page-footer font-small opacity-sm bg-blue-400">
 
 
  <div class="container flex gap-4">
   <div class="w-2/6  py-4">
     <h2 class="text-bold text-white text-2xl">follow us on :</h2>
     <br/>
     <ul>
       <li class="flex gap-4"><a href="https://www.facebook.com/Stand-for-Them-Company-103418874713053"><FaFacebook class="text-2xl"/></a> <a>Facebook</a></li>
       <br/><li class="flex gap-4"><a><FaFacebookMessenger class="text-2xl"/></a> <a>Linkedin</a></li>
       <br/><li class="flex gap-4"><a><FaTwitter class="text-2xl"/></a> <a>Twitter</a></li>
       <br/><li class="flex gap-4"><a><FaInstagram class="text-2xl"/></a> <a>Instagram</a></li>
     </ul>
   </div>
   <div class="w-2/6  py-4">
     <h2 class="text-bold text-white text-2xl">location</h2>
     <br/>
     <br/>
     <p class="flex gap-4"><a><FaMap class="text-2xl"/></a> <a>Remera,Gasabo,Kigali,Rwanda</a></p>
   </div>
   <div class="w-2/6  py-4">
     <h2 class="text-bold text-white text-2xl">Contact us on</h2>
     <br/>
     <ul>
       <br/><li class="flex gap-4"><a><FaMailBulk class="text-2xl"/></a><a>standforthem2020@gmail.com</a></li>
       <br/><li class="flex gap-4"><a><FaWhatsapp class="text-2xl"/></a> <a>0783852003</a></li>
       <br/><li class="flex gap-4"><a><FaCalculator class="text-2xl"/></a> <a>0784937775</a></li>
     </ul>
   </div>
    
  </div>
  

  
  <div class="footer-copyright text-center py-3">© 2020 Copyright:
    <a href="/">STAND FOR THEM</a>
  </div>
  

</footer>


        </div>
    )
}

export default Body;