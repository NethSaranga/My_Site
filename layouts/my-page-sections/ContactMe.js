import React from "react";
import RoundedButton from "../../components/common/RoundedButtons"
import Image from 'next/image';
import Section, {SectionColumn, SectionRow} from "../common/section";
import { ThemeContext } from "../../context/themecontext";


export default function ContactMe(props){
    const {theme} = ThemeContext();
    const themeClass = theme && theme || 'light';
    return(
        <div>
              <Section id="aboutme" className={`pageBG ${themeClass}`}>
                <SectionColumn className={`w-full items-center ml-20 mt-28 sub-head  ${themeClass}`}>Feel free to contact me anytime</SectionColumn>
                <SectionColumn className={`w-full items-center ml-20  main-head  ${themeClass}`}>Get in Touch</SectionColumn>
                <SectionColumn className="w-1/12  items-start mt-4"> </SectionColumn>
                <SectionColumn className="w-6/12  items-start mt-4 ml-8">
                    <span className={`Message-Me ${themeClass}`}>Message Me</span>
                    <form  > 
                        <SectionRow>
                            <input type="text" name="name" className="name-Rectangle " placeholder="Name" maxLength="50" required="true" />
                            <input type="email" name="email" className="email-Rectangle " placeholder="Email" maxLength="50" required="true"/>
                        </SectionRow>
                        <input type="text" name="subject" className="subject-Rectangle " placeholder="Subject" maxLength="50" required="true" />
                        <input type="text" name="message" className="message-Rectangle " placeholder="Message"  required="true" />
                        <RoundedButton className="text-center items-center ask-me-how mt-10 mb-28" type="submit">
                                <span>Send Message</span>
                            </RoundedButton>
                    </form>
                    
                </SectionColumn>
                
                <SectionColumn className="w-4/12  items-start mt-4">
                    <span className={`Message-Me ${themeClass}`}>Contact Info</span>
                    <span className={`contactInfo-p ${themeClass}`}>Always available for freelance work if the right project comes along, Feel free to contact me!</span>
                    <SectionColumn>
                        <div className="Line-5"></div>
                        <SectionColumn className="">  
                                <span className={`Cemail ${themeClass}`}>Name</span>
                                <span className={`Cmyemail ${themeClass}`}>Jayneth Saranga</span>
                                <span className={`Cemail ${themeClass}`}>Email</span>
                                <span className={`Cmyemail ${themeClass}`}>lakshithajayanethsaranga@gmail.com</span> 
                                <span className={`Cemail ${themeClass}`}>Phone</span>
                                <span className={`Cmyemail ${themeClass}`}>+94 719959259</span> 
                                <span className={`Cemail ${themeClass}`}>Location</span>
                                <span className={`Cmyemail ${themeClass}`}>Balangoda, Sri Lanka</span>        
                        </SectionColumn>
                    </SectionColumn>
                </SectionColumn>
                    
                
            </Section>
        </div>
        
        
    )
}