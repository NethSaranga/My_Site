import React, {useState, useEffect} from "react";
// import Twitter from "../../public/assets/images/icons/icons8-twitter-30.png"
import { FaFacebookF, FaGithub, FaTwitter, FaYoutube } from "react-icons/fa";
import {GrHeroku, GrLinkedin} from "react-icons/gr";

export default function SideBar(props){
    return(
        <div className="sideBar">
            
            <span className="S">S</span>
            <span className="N">N</span>
            <div className="IconsDiv flex flex-col justify-center bottom-10"> 
               <FaTwitter className="Icons"/>
               <FaGithub  className="Icons"/>
               <GrHeroku  className="Icons"/>
               <GrLinkedin className="Icons"/>
            </div>
            <div className="line-1"></div>
            
        </div>
    );
}