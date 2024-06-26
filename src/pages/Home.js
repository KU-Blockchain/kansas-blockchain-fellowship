import React from "react";
import About from "../components/AboutPreview";
import Welcome from "../components/Welcome";
import { Box, Image } from "@chakra-ui/react";
import Team from "../components/Team";
import Mentors from "../components/Mentors";
//import ColorModeSwitcher from "../components/ColorModeSwitcher";
import WindmillImage from "../components/WindmillImage";
import ThreeCircles from "../components/ThreeCircles";
import Footer from "../components/Footer";
import Eligibility from "../components/Eligibility";
import Fellows from "../components/Fellows";
import ProgramOutline from "../components/ProgramOutline";

function Home() {
  return (
    <Box className="Home">
      {/* <ColorModeSwitcher /> */}
      <Welcome />
      <About />
      {/* <ThreeCircles /> */}
      <Mentors />
      <Fellows />

      <Team />

      <WindmillImage />
      <ProgramOutline />
      <Footer />
    </Box>
  );
}

export default Home;
