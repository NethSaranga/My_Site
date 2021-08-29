import React from "react";
import RoundedButton from "../../components/common/RoundedButtons"
import Image from 'next/image';
import Section, {SectionColumn, SectionRow} from "../common/section";


export default function AboutMe(props){
    return(
        <div>
              <Section id="aboutme">
                <SectionColumn className="w-full items-center ml-20 mt-20 sub-head">Get to know me</SectionColumn>
                <SectionColumn className="w-full items-center ml-20  main-head">About me</SectionColumn>
                <SectionColumn className="w-6/12  items-start mt-4">
                    <div className="pl-40">
                        
                    </div>         
                </SectionColumn>
                <SectionColumn className="w-6/12  items-start mt-4">
                    <span className="whoAmI">Who am I?</span>
                    <p1 className="Im-neth mt-4">I’m Neth Saranga, a visual UX/UI Designer and Web Developer</p1>
                    <p2 className="myDis mt-4">
                        I am a freelancer based in the United Kingdom and i have been building 
                        noteworthy UX/UI designs and websites for years, which comply with the 
                        latest design trends. I help convert a vision and an idea into meaningful and 
                        useful products. Having a sharp eye for product evolution helps me prioritize 
                        tasks, iterate fast and deliver faster.
                    </p2>

                    <SectionRow className="mt-14">
                        <span className="email">Name:</span>
                        <span className="myemail">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Jayaneth Saranga</span>
                    </SectionRow>
                    <SectionRow className="mt-4">
                        <span className="email">Age:</span>
                        <span className="myemail">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;24</span>
                    </SectionRow>
                    <SectionRow className="mt-4">
                        <span className="email">Email:</span>
                        <span className="myemail">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lakshithajayanethsaranga@gmail.com</span>
                    </SectionRow>
                    <SectionRow className="mt-4">
                        <span className="email">Location:</span>
                        <span className="myemail">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Balangoda, Sri Lanka</span>
                    </SectionRow>
                    <RoundedButton className="text-center items-center ask-me-how mt-10 mb-10">
                        <span>Download CV</span>
                    </RoundedButton>
                </SectionColumn>
            </Section>
        </div>
        
        
    )
}