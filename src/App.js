import React from "react";
import About from "./components/About";
import Welcome from "./components/Welcome";
import { Box } from "@chakra-ui/react";
import Team from "./components/Team";
import Mentors from "./components/Mentors";

function App() {
  return (
    <Box className="App">
      <Welcome />
      <About />
      <Team />
      <Mentors />
    </Box>
  );
}

export default App;
