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
               <FaTwitter className={`Icons ${themeClass}`}/>
               <FaGithub  className={`Icons ${themeClass}`}/>
               <GrHeroku  className={`Icons ${themeClass}`}/>
               <GrLinkedin className={`Icons ${themeClass}`}/>
               {
                   theme === "light" ? (
                    <button className="h-10 w-15 ml-6 opacity-70" onClick={e => setTheme('dark')}>
                        <Image src={night} width={28} height={28} alt=""  />    
                    </button>
                   ) : (
                    <button className="h-10 w-15 ml-5 " onClick={e => setTheme('light')}>
                        <Image src={day} width={35} height={35} alt=""  className=""/>    
                    </button>
                   )
               }
              
               
               {/* <div className="wrg-toggle">
                    <div className="wrg-toggle-container">
                        <div className="wrg-toggle-check">
                            <span>🌜</span>
                        </div>
                        <div className="wrg-toggle-uncheck">
                            <span>🌞</span>
                        </div>
                    </div>
                    <div className="wrg-toggle-circle"></div>
                    <input className="wrg-toggle-input" type="checkbox" aria-label="Toggle Button" />
                </div> */}
                
            </div>
            <div className="line-1"></div>
            
        </div>
    );
}