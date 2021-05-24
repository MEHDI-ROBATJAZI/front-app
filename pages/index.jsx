import React, { useEffect, useRef } from "react";
import Head from "next/head";
import Header from "../app/Components/header";
import Footer from "../app/Components/footer";
import Section1 from "../app/Components/IndexPage/section1";
import Section2 from "../app/Components/IndexPage/section2";
import Section3 from "../app/Components/IndexPage/section3";

import {Box} from "@chakra-ui/react";

const Home = () => {

  return (
    <Box>
      <Head>
        <title>Hello i'm mahdi robatjazi</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Header />

      <Section1 />


      <Section2 />

      
      <Section3 />

      <Footer />
    </Box>
  );
};

export default Home;
