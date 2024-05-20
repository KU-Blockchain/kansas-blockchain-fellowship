import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PublicNavbar from "./components/PublicNavBar";
import Sponsorships from "./pages/Sponsorships";
import Applications from "./pages/Applications";
import About from "./pages/About";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Resources from "./pages/Resources";
import Syllabus from "./pages/Syllabus";
import Directory from "./pages/Directory";

import { Box, Image } from "@chakra-ui/react";
import Home from "./pages/Home";

function App() {
  return (
    <Box className="App">
      <Router>
        <PublicNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sponsorships" element={<Sponsorships />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/resources" element={<Resources />} />
          <Route path="/dashboard/directory" element={<Directory />} />
          <Route path="/dashboard/syllabus" element={<Syllabus />} />
        </Routes>
      </Router>
    </Box>
  );
}

export default App;
