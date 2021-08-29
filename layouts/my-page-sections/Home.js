import React from "react";
import SideBar from "../../components/sidebar/index";
import NavBar from "../../components/navbar/index";
import Section, {SectionColumn, SectionRow} from "../common/section";
import RoundedButton from "../../components/common/RoundedButtons"
import Image from 'next/image';
import myLog from "../../public/assets/images/my-n.png"


export default function Home(props){
    return(
        <div>
            <SideBar/>
            <NavBar />

          
            <Section id="home">
                <SectionColumn className="w-6/12  items-start mt-14">
                    <div className="pt-44 pl-40">
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
                </SectionColumn>
                <SectionColumn className="w-6/12 ">
                    <div className="col-span-6 text-center items-center mt-32">
                                    
                        <Image
                            src={myLog}
                            width={500}
                            height={500}
                            alt="M1 Space: Card Change"
                        />
                    </div>
                </SectionColumn>
                <SectionRow className="w-full">
                    <SectionColumn className="pl-40">  
                            <span className="email">Email</span>
                            <span className="myemail">lakshithajayanethsaranga@gmail.com</span>    
                    </SectionColumn>
                    
                    <div className="line-2 mr-14"/>
                    <SectionColumn className="w-40">
                        <span className="email">Phone</span>
                        <span className="myemail">+94-71-9959259</span>
                    </SectionColumn>
                    <div className="line-2 mr-14"/>
                    <SectionColumn className="w-40">
                        <span className="email">Location</span>
                        <span className="myemail">Balangoda, Sri Lanka</span>
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