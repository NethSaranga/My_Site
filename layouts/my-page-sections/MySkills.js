import React, {useState} from "react";
import RoundedButton from "../../components/common/RoundedButtons"
import Image from 'next/image';
import Section, {SectionColumn, SectionRow} from "../common/section";
import Fade from 'react-reveal/Fade';
import { ThemeContext } from "../../context/themecontext";



export default function MySkills(props){
    const {theme} = ThemeContext();
    const themeClass = theme && theme || 'light';
    return(
        <div>
              <Section id="aboutme" className={`pageBG ${themeClass}`}>
                <SectionColumn className={`w-full items-center ml-20 mt-20 sub-head  ${themeClass}`}>My level of knowledge in some tools</SectionColumn>
                <SectionColumn className={`w-full items-center ml-20  main-head  ${themeClass}`}>My Skills</SectionColumn>
                <SectionColumn className="w-6/12  items-center mt-12 ">
                    <Fade bottom>

                    <div className="skill-bars">
                        <div className="bar">
                            <div className={`info ${themeClass}`}>
                                <span>Java Script</span>
                            </div>
                            <div className="progress-line js">
                                <span></span>
                            </div>
                        </div>
                        <div className="bar">
                            <div className={`info ${themeClass}`}>
                                <span>Java OOP</span>
                            </div>
                            <div className="progress-line java">
                                <span></span>
                            </div>
                        </div>
                        <div className="bar">
                            <div className={`info ${themeClass}`}>
                                <span>Dart</span>
                            </div>
                            <div className="progress-line dart">
                                <span></span>
                            </div>
                        </div>
                        <div className="bar">
                            <div className={`info ${themeClass}`}>
                                <span>Python</span>
                            </div>
                            <div className="progress-line python">
                                <span></span>
                            </div>
                        </div>
                        <div className="bar">
                            <div className={`info ${themeClass}`}>
                                <span>HTML</span>
                            </div>
                            <div className="progress-line html">
                                <span></span>
                            </div>
                        </div>
                        <div className="bar">
                            <div className={`info ${themeClass}`}>
                                <span>CSS</span>
                            </div>
                            <div className="progress-line css">
                                <span></span>
                            </div>
                        </div>
                    </div>
                    </Fade>
                </SectionColumn>
                <SectionColumn className="w-1/12  items-center mt-4">
                    <div className="line-4"></div> 
                </SectionColumn>
                <SectionColumn className="w-5/12  items-center mt-12">
                <Fade bottom>
                    <div className="skill-bars">
                        <div className="bar">
                            <div className={`info ${themeClass}`}>
                                <span>React.js</span>
                            </div>
                            <div className="progress-line react">
                                <span></span>
                            </div>
                        </div>
                        <div className="bar">
                            <div className={`info ${themeClass}`}>
                                <span>Next.js</span>
                            </div>
                            <div className="progress-line next">
                                <span></span>
                            </div>
                        </div>
                        <div className="bar">
                            <div className={`info ${themeClass}`}>
                                <span>Flutter</span>
                            </div>
                            <div className="progress-line flutter">
                                <span></span>
                            </div>
                        </div>
                        <div className="bar">
                            <div className={`info ${themeClass}`}>
                                <span>Node.js</span>
                            </div>
                            <div className="progress-line nodejs">
                                <span></span>
                            </div>
                        </div>
                        <div className="bar">
                            <div className={`info ${themeClass}`}>
                                <span>MYSQL</span>
                            </div>
                            <div className="progress-line mysql">
                                <span></span>
                            </div>
                        </div>
                        <div className="bar">
                            <div className={`info ${themeClass}`}>
                                <span>MongoDB</span>
                            </div>
                            <div className="progress-line mongodb">
                                <span></span>
                            </div>
                        </div>
                    </div>
                    </Fade>
                </SectionColumn>
                    
           
            </Section>
        </div>
        
        
    )
}



