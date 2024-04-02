import React from "react";
import { Box, Text } from "@chakra-ui/react";
import WindmillImage from "../components/WindmillImage";
import AboutPreview from "../components/AboutPreview";
import Footer from "../components/Footer";

function About() {
  return (
    <Box className="About">
      <AboutPreview />
      <WindmillImage />
      <Text></Text>
      <Footer />
    </Box>
  );
}

export default About;
