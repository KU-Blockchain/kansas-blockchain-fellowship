import React from "react";
import About from "./components/About";
import Welcome from "./components/Welcome";
import { Box, Image } from "@chakra-ui/react";
import Team from "./components/Team";
import Mentors from "./components/Mentors";
import ColorModeSwitcher from "./components/ColorModeSwitcher";
import WindmillImage from "./components/WindmillImage";
import ThreeCircles from "./components/ThreeCircles";
import Footer from "./components/Footer";

function App() {
  return (
    <Box className="App">
      <ColorModeSwitcher />
      <Welcome />
      <About />
      <ThreeCircles />
      <Team />
      <WindmillImage />
      <Mentors />
      <Footer />
    </Box>
  );
}

export default App;
