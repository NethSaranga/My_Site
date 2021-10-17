import React, {useState, useEffect} from "react";
// import Twitter from "../../public/assets/images/icons/icons8-twitter-30.png"
import { FaFacebookF, FaGithub, FaTwitter, FaYoutube } from "react-icons/fa";
import {GrHeroku, GrLinkedin} from "react-icons/gr";
import Toggle from "react-toggle";
import Image from "next/image";
import night from "../../public/assets/images/icons/night.gif";
import day from "../../public/assets/images/icons/day2.png"
import { ThemeContext } from "../../context/themecontext";

export default function SideBar(props){

    const {theme , setTheme} = ThemeContext();
    const themeClass = theme && theme || 'light';
    
    return(
        <div className={`sideBar ${themeClass}`}>
            <span className="S">S</span>
            <span className={`N ${themeClass}`}>N</span>
            <div className="IconsDiv flex flex-col justify-center bottom-10"> 
            <button onClick={() => { window.open("https://github.com/NethSaranga")}}><FaGithub  className={`Icons ${themeClass} transform hover:scale-110 motion-reduce:transform-none`}/></button>
            <button onClick={() => { window.open("https://www.linkedin.com/in/saranga-jayaneth-33a86617a/")}}><GrLinkedin className={`Icons ${themeClass} transform hover:scale-110 motion-reduce:transform-none`}/></button>
            <button onClick={() => { window.open("https://github.com/NethSaranga")}}><GrHeroku  className={`Icons ${themeClass} transform hover:scale-110 motion-reduce:transform-none`}/></button>
            <button onClick={() => { window.open("https://www.facebook.com/profile.php?id=100013362248463")}}><FaFacebookF className={`Icons ${themeClass} transform hover:scale-110 motion-reduce:transform-none`} /></button>
               
               
               
               
               {
                   theme === "light" ? (
                    <button className="h-10 w-15 ml-6 opacity-70 transform hover:scale-110 motion-reduce:transform-none" onClick={e => setTheme('dark')}>
                        <Image src={night} width={28} height={28} alt=""  />    
                    </button>
                   ) : (
                    <button className="h-10 w-15 ml-5 transform hover:scale-110 motion-reduce:transform-none" onClick={e => setTheme('light')}>
                        <Image src={day} width={35} height={35} alt=""  className=""/>    
                    </button>
                   )
               }
              
                
            </div>
            <div className={`line-1 ${themeClass}`}></div>
            
        </div>
    );
}