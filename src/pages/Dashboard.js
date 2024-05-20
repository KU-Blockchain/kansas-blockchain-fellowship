import React from "react";
import Calendar from "../components/After_auth/Syllabus";
import DashboardNavbar from "../components/After_auth/DashboardNavbar";

import { Box, Text, Image } from "@chakra-ui/react";

function Dashboard() {
  return (
    <>
      <DashboardNavbar />
      <Box textAlign="center" py={10}>
        <Text fontSize="xl" mt={5} fontWeight="bold" mx={6}>
          Welcome Fellows and Mentors!
        </Text>

        <Text textColor="gray.400" mr={"15vh"} ml={"15vh"} mt={"30px"}></Text>
        <Calendar />
      </Box>
    </>
  );
}

export default Dashboard;
