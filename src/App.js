import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigate } from "react-router";
import PublicNavbar from "./components/PublicNavBar";
import Sponsorships from "./pages/Sponsorships";
import Applications from "./pages/Applications";
import About from "./pages/About";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Resources from "./pages/Resources";
import Syllabus from "./pages/Syllabus";
import Directory from "./pages/Directory";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import { Box } from "@chakra-ui/react";
import Home from "./pages/Home";

const ProtectedRoute = ({ children }) => {
  const { isVerified } = useAuth();
  return isVerified ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <Box className="App">
      <Router>
        <AuthProvider>
          <PublicNavbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/sponsorships" element={<Sponsorships />} />
            <Route path="/applications" element={<Applications />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/dashboard/resources" element={<ProtectedRoute><Resources /></ProtectedRoute>} />
            <Route path="/dashboard/directory" element={<ProtectedRoute><Directory /></ProtectedRoute>} />
            <Route path="/dashboard/syllabus" element={<ProtectedRoute><Syllabus /></ProtectedRoute>} />
          </Routes>
        </AuthProvider>
      </Router>
    </Box>
  );
}

export default App;
