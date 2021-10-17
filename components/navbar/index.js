import Image from "next/image";
import React, {useState, useEffect} from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import {FaPhoneAlt} from "react-icons/fa";
import { ThemeContext } from "../../context/themecontext";


export default function Navbar(props){

    const {theme} = ThemeContext();
    const themeClass = theme && theme || 'light';
   
    const [navbar, setNavbar] = useState(false);

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    const scrollToBottom = () => {
        scroll.scrollToBottom();
    };

    const scrollToAbout = () => {
        scroll.scrollTo(700);
    };

    const scrollToResome = () => {
        scroll.scrollTo(1420);
    };
    const scrollToMyskills = () => {
        scroll.scrollTo(2070);
    };

    const changeBackground = () => {
       if( window.scrollY >= 1) {
           setNavbar(true);
       }
       else{
           setNavbar(false);
       }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeBackground)
    }, [])

    return (
        <div className={`navBar ${themeClass} shadow`}>
            <div className="">
                <nav className="flex flex-row ">
                <div className="list-none  navbar-list items-center  w-full">
                    <Link activeClass="active" to="" spy={true} smooth={true} offset={-70} duration={500} onClick={scrollToTop}>
                        <button className={`inline ml-16  nabBarButn ${themeClass} transform hover:scale-110 motion-reduce:transform-none `} >Home</button>
                    </Link>
                    <Link activeClass="active" to="" spy={true} smooth={true} offset={-70} duration={500} onClick={scrollToAbout}>
                        <button className={`inline ml-16  nabBarButn ${themeClass} transform hover:scale-110 motion-reduce:transform-none `}>About me</button>
                    </Link>
                    <Link activeClass="active" to="" spy={true} smooth={true} offset={-70} duration={500} onClick={scrollToResome}>
                        <button className={`inline ml-16  nabBarButn ${themeClass} transform hover:scale-110 motion-reduce:transform-none `}>Resume</button>
                    </Link>
                    <Link activeClass="active" to="" spy={true} smooth={true} offset={-70} duration={500} onClick={scrollToMyskills}>
                        <button className={`inline ml-16  nabBarButn ${themeClass} transform hover:scale-110 motion-reduce:transform-none `}>My skills</button>
                    </Link>
                    <Link activeClass="active" to="" spy={true} smooth={true} offset={-70} duration={500} onClick={scrollToBottom}>
                        <button className={`inline ml-16  nabBarButn ${themeClass} transform hover:scale-110 motion-reduce:transform-none `}>Contact me</button>
                    </Link>
                    
                    <Link activeClass="active" to="" spy={true} smooth={true} >
                            <a href="tel:+94 719959259">
                                <FaPhoneAlt className="inline callLogo absolute right-80 mt-1.5 "/>
                                <li className="inline  ml-4 nabBarcallButn  absolute right-48 mt-0.5 transform hover:scale-105 motion-reduce:transform-none" >Schedule a call</li>
                            </a>
                    </Link>
                    {/* <div className="absolute  top-0">sdsd</div> */}
                </div>
                </nav>
            </div>
        </div>
    )
}