import React from "react";
import SideBar from "../../components/sidebar/index";
import NavBar from "../../components/navbar/index";
import Section, {SectionColumn, SectionRow} from "../common/section";
import RoundedButton from "../../components/common/RoundedButtons"
import Image from 'next/image';
import myLog from "../../public/assets/images/my-n.png";
import myLogB from "../../public/assets/images/my-nB.png";
import Fade from 'react-reveal/Fade';
import { ThemeContext } from "../../context/themecontext";



export default function Home(props){

    const {theme} = ThemeContext();
    const themeClass = theme && theme || 'light';
    return(
        <div>
            <SideBar/>
            <NavBar />

          
            <Section id="home" className={`pageBG ${themeClass}`}>
                <SectionColumn className="w-6/12  items-start mt-14">
                    <div className="pt-44 pl-40">
                        <span className={`hithere ${themeClass}`}>Hi There,</span>
                        <br/>
                        <span className={`inline Iam ${themeClass}`}>I am Neth_</span>
                        <span className="inline IamS">S</span>
                        <span className={`inline Iam ${themeClass}`}>aranga</span>
                        <br/>
                        <span className={`position ${themeClass}`}>I am a developer</span>
                        <br/>
                        <a href="tel:+94 719959259">
                        <RoundedButton className="text-center items-center ask-me-how mt-10">
                            <span>Ask me how</span>
                        </RoundedButton>
                        </a>
                    </div>         
                </SectionColumn>
                <SectionColumn className="w-6/12 ">
                    <div className="col-span-6 text-center items-center mt-32">   
                        <Fade right>
                            {
                                themeClass === 'light' ? (
                                    <Image
                                        src={myLog}
                                        width={500}
                                        height={500}
                                        alt="M1 Space: Card Change"
                                        />     
                                ) : (
                                    <Image
                                        src={myLogB}
                                        width={500}
                                        height={500}
                                        alt="M1 Space: Card Change"
                                        />     
                                )
                            }
                            
                        </Fade>
                    </div>
                </SectionColumn>
                <SectionRow className="w-full">
                    <SectionColumn className="pl-40">  
                            <span className={`email ${themeClass}`}>Email</span>
                            <span className={`myemail ${themeClass}`}>lakshithajayanethsaranga@gmail.com</span>    
                    </SectionColumn>
                    
                    <div className="line-2 mr-14"/>
                    <SectionColumn className="w-40">
                        <span className={`email ${themeClass}`}>Phone</span>
                        <span className={`myemail ${themeClass}`}>+94-71-9959259</span>
                    </SectionColumn>
                    <div className="line-2 mr-14"/>
                    <SectionColumn className="w-40">
                        <span className={`email ${themeClass}`}>Location</span>
                        <span className={`myemail ${themeClass}`}>Balangoda, Sri Lanka</span>
                    </SectionColumn>
                            
                                
                </SectionRow>
            
                {/* <div className="pageLayOut">
                    <div className="flex flex-col">
                            <div className="grid grid-cols-12 h-full">
                                
                                <div className="col-span-6  pt-44 pl-20">
                                    <span className="hithere">Hi There,</span>
                                    <br/>
                                    <span className="inline Iam">I am Neth_</span>
                                    <span className="inline IamS">S</span>
                                    <span className="inline Iam">aranga</span>
                                    <br/>
                                    <span className="position">I am a developer</span>
                                    <br/>
                                    <RoundedButton className="text-center items-center ask-me-how mt-10">
                                        <span>Ask me how</span>
                                    </RoundedButton>
                                </div>
                                <div className="col-span-6 text-center items-center pt-16">
                                
                                    <Image
                                        src={myLog}
                                        width={500}
                                        height={500}
                                        alt="M1 Space: Card Change"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-12 h-full pt-8 pl-20">
                                <div className="flex flex-col">
                                    <span className="email">Email</span>
                                    <span className="myemail">lakshithajayanethsaranga@gmail.com</span>
                                </div>
                                <div className="line-2 ml-56"/>
                                <div className="flex flex-col ml-44">
                                    
                                    <span className="email">Phone</span>
                                    <span className="myemail">+94-71-9959259</span>
                                </div>
                                <div className="line-2 ml-56"/>
                                <div className="flex flex-col ml-44">
                                    
                                    <span className="email">Location</span>
                                    <span className="myemail">Balangoda, Sri Lanka</span>
                                </div>
                            
                            </div>
                        </div>
                        
                        
                </div> */}
            </Section>

            

           

        </div>
    );
}