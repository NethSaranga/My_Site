import React from "react";
import Section, {SectionColumn, SectionRow} from "../common/section";
import Fade from 'react-reveal/Fade';
import { ThemeContext } from "../../context/themecontext";


export default function Resume(props){
    const {theme} = ThemeContext();
    const themeClass = theme && theme || 'light';
    return(
        <div>
              <Section id="aboutme" className={`pageBG ${themeClass}`}>
                <SectionColumn className={`w-full items-center ml-20 mt-20 sub-head  ${themeClass}`}>Check out my resume</SectionColumn>
                <SectionColumn className={`w-full items-center ml-20  main-head  ${themeClass}`}>Resume</SectionColumn>
                <SectionColumn className="w-6/12 md:w-full md:ml-20  items-center mt-4">
                    <span className="whoAmI">Education</span>
                    <Fade bottom>
                        <SectionColumn className="w-full items-center ">
                                <span className={`resume-heder ${themeClass} mt-10`}>Bachelor of science</span>
                                <span className={`resume-subheder ${themeClass}`}>University of Peradeniya</span>
                                <span className={`resume-p ${themeClass}`}>(Computer science,Statistic)</span>
                        </SectionColumn>
                    </Fade>
                    <Fade bottom>
                        <SectionColumn className="w-full items-center ">
                            <span className={`resume-heder ${themeClass} mt-10`}>Diploma in English</span>
                            <span className={`resume-subheder ${themeClass}`}>British Way English Academy(Colombo)</span>
                        </SectionColumn>
                    </Fade>
                    <Fade bottom>
                        <SectionColumn className="w-full items-center "> 
                            <span className={`resume-heder ${themeClass} mt-10`}>Balangoda Ananda Maithreya</span>
                            <span className={`resume-heder ${themeClass}`}>Central College</span>
                            <span className={`resume-subheder ${themeClass}`}>Pass - Advanced level</span>
                            <span className={`resume-p ${themeClass}`}>Physics- B, Chemistry- B, C.Maths-C</span>
                            <span className={`resume-subheder ${themeClass}`}>Pass - Ordinary level</span>
                            <span className={`resume-p ${themeClass}`}>with 6As and 4Bs</span>
                        </SectionColumn>
                    </Fade>


                </SectionColumn>
                <SectionColumn className="w-1/12 md:hidden  items-center mt-4">
                    <div className={`line-3 ${themeClass}`}></div> 
                </SectionColumn>
                <SectionColumn className="w-5/12  md:w-full md:ml-20  items-center mt-4">
                    <span className="whoAmI">Experience</span>
                    <Fade bottom>
                        <SectionColumn className="w-full items-center ">
                            <span className={`resume-heder ${themeClass} mt-10`}>ElysianCrest(Pvt)Ltd, Colombo</span>
                            <span className={`resume-subheder ${themeClass}`}>Software engineer intern</span>
                            <span className={`resume-p ${themeClass}`}>May|2021 - Oct|2021</span>
                        </SectionColumn>
                    </Fade>
                </SectionColumn>
                    
                
            </Section>
        </div>
        
        
    )
}