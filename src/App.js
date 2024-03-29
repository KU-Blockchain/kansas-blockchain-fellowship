import React from "react";
import About from "./components/About";
import Welcome from "./components/Welcome";
import { Box } from "@chakra-ui/react";
import Team from "./components/Team";

function App() {
  return (
    <Box className="App">
      <Welcome />
      <About />
      <Team />
    </Box>
  );
}

export default App;
