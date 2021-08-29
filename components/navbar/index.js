import Image from "next/image";
import React, {useState, useEffect} from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import {FaPhoneAlt} from "react-icons/fa";


export default function Navbar(props){
   

    return (
        <div className="navBar shadow">
            <div className="">
                <nav className="flex flex-row ">
                <div className="list-none  navbar-list items-center  w-full">
                    <Link activeClass="active" to="" spy={true} smooth={true} offset={-70} duration={500} >
                        <li className="inline ml-16  nabBarButn ">Home</li>
                    </Link>
                    <Link activeClass="active" to="" spy={true} smooth={true} offset={-70} duration={500} >
                        <li className="inline ml-16  nabBarButn ">About me</li>
                    </Link>
                    <Link activeClass="active" to="" spy={true} smooth={true} offset={-70} duration={500} >
                        <li className="inline ml-16  nabBarButn ">Resume</li>
                    </Link>
                    <Link activeClass="active" to="" spy={true} smooth={true} offset={-70} duration={500} >
                        <li className="inline ml-16  nabBarButn ">My skills</li>
                    </Link>
                    <Link activeClass="active" to="" spy={true} smooth={true} offset={-70} duration={500} >
                        <li className="inline ml-16  nabBarButn ">Contact me</li>
                    </Link>
                    
                    <Link activeClass="active" to="" spy={true} smooth={true} offset={-70} duration={500} >
                    
                                <FaPhoneAlt className="inline callLogo absolute right-80 mt-1.5"/>
                                <li className="inline  ml-4 nabBarcallButn  absolute right-48 mt-0.5" >Schedule a call</li>
                    </Link>
                    {/* <div className="absolute  top-0">sdsd</div> */}
                </div>
                </nav>
            </div>
        </div>
    )
}