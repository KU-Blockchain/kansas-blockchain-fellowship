import React from "react";
import { Box, Text } from "@chakra-ui/react";
import WindmillImage from "../components/WindmillImage";
import AboutProgram from "../components/AboutProgram";
import Footer from "../components/Footer";
import ProgramOutline from "../components/ProgramOutline";
import Curriculum from "../components/Curriculum";

function About() {
  return (
    <Box className="About">
      <AboutProgram />
      <ProgramOutline />
      <Curriculum />
      <WindmillImage />
      <Text></Text>
      <Footer />
    </Box>
  );
}

export default About;
