import React from "react";
import RoundedButton from "../../components/common/RoundedButtons"
import Image from 'next/image';
import Section, {SectionColumn, SectionRow} from "../common/section";
import myLog from "../../public/assets/images/aboutMe.svg"
import Fade from 'react-reveal/Fade';
import { ThemeContext } from "../../context/themecontext";


export default function AboutMe(props){
    const {theme} = ThemeContext();
    const themeClass = theme && theme || 'light';

    return(
        <div>
              <Section id="aboutme"  className={`pageBG ${themeClass}`}>
                <SectionColumn className={`w-full items-center ml-20 mt-20 sub-head  ${themeClass}`}>Get to know me</SectionColumn>
                <SectionColumn className={`w-full items-center ml-20  main-head  ${themeClass}`}>About me</SectionColumn>
                <SectionColumn className="w-6/12  items-start mt-4 pl-48 pt-10 pr-10">
                <Fade left>
             

                    <Image
                            src={myLog}
                            width={500}
                            height={500}
                            alt="M1 Space: Card Change"
                            />   
                           
                </Fade>
                </SectionColumn>
                <SectionColumn className="w-6/12  items-start mt-4">
                    <span className="whoAmI">Who am I?</span>
                    <p1 className={`Im-neth ${themeClass} mt-4`}>I’m Neth Saranga, a full stack Web Developer</p1>
                    <p2 className={`myDis ${themeClass} mt-4`}>
                    I am an honest, self- confident, quick learning, motivated fresher,
                    comfortable with public relations, team work and leadership. l wish to
                    achieve my personal goals related to the Computer science.
                    </p2>

                    <SectionRow className="mt-14">
                        <span className={`email ${themeClass}`}>Name:</span>
                        <span className={`myemail ${themeClass}`}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Jayaneth Saranga</span>
                    </SectionRow>
                    <SectionRow className="mt-4">
                        <span className={`email ${themeClass}`}>Age:</span>
                        <span className={`myemail ${themeClass}`}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;24</span>
                    </SectionRow>
                    <SectionRow className="mt-4">
                        <span className={`email ${themeClass}`}>Email:</span>
                        <span className={`myemail ${themeClass}`}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lakshithajayanethsaranga@gmail.com</span>
                    </SectionRow>
                    <SectionRow className="mt-4">
                        <span className={`email ${themeClass}`}>Location:</span>
                        <span className={`myemail ${themeClass}`}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Balangoda, Sri Lanka</span>
                    </SectionRow>
                    <RoundedButton className="text-center items-center ask-me-how mt-10 mb-10">
                        <span>Download CV</span>
                    </RoundedButton>
                </SectionColumn>
            </Section>
        </div>
        
        
    )
}