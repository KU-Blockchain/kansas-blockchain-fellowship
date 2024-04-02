import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar";
import Sponsorships from "./pages/Sponsorships";
import Applications from "./pages/Applications";

import { Box, Image } from "@chakra-ui/react";
import Home from "./pages/Home";

function App() {
  return (
    <Box className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sponsorships" element={<Sponsorships />} />
          <Route path="/applications" element={<Applications />} />
        </Routes>
      </Router>
    </Box>
  );
}

export default App;
