import React from "react";
import Head from 'next/head';
import Container from '../layouts/common/container/index'
import AboutMe from '../layouts/my-page-sections/AboutMe';
import Home from '../layouts/my-page-sections/Home';


export default function LandingPage() {
  return (
    <Container>
      <Head>
        <title>Neth Saranga</title>
      </Head>
      <Home/>
      <AboutMe/>
    </Container>
  );
}
