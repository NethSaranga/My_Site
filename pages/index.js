import React from "react";
import Head from 'next/head';
import Container from '../layouts/common/container/index'
import AboutMe from '../layouts/my-page-sections/AboutMe';
import Home from '../layouts/my-page-sections/Home';
import Resume from "../layouts/my-page-sections/Resume";
import MySkills from "../layouts/my-page-sections/MySkills";
import ContactMe from "../layouts/my-page-sections/ContactMe";


export default function LandingPage() {
  return (
    <Container>
      <Head>
        <title>Neth Saranga</title>
      </Head>
      <Home/>
      <AboutMe/>
      <Resume/>
      <MySkills/>
      <ContactMe/>
    </Container>
  );
}
