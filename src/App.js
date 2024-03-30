import React from "react";
import About from "./components/About";
import Welcome from "./components/Welcome";
import { Box, Image } from "@chakra-ui/react";
import Team from "./components/Team";
import Mentors from "./components/Mentors";
import ColorModeSwitcher from "./components/ColorModeSwitcher";
import WindmillImage from "./components/WindmillImage";

function App() {
  return (
    <Box className="App">
      <ColorModeSwitcher />
      <Welcome />
      <About />
      <Team />
      <WindmillImage />
      <Mentors />
    </Box>
  );
}

export default App;
