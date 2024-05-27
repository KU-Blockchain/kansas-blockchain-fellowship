import React from "react";
import Calendar from "../components/After_auth/Calendar";
import Assignments from "../components/After_auth/Assignments"; // Ensure Assignments is correctly imported

import { Box, Text, VStack } from "@chakra-ui/react";
import Footer from "../components/Footer";

function Dashboard() {
  return (
    <>
      <Box py={10} px={6} textAlign="center">
        <Text fontSize="xxxl" mt={5} fontWeight="bold">
          Welcome!
        </Text>
        <Text mt={4} mx="auto" maxWidth="80%" textColor="gray.400">
          Welcome to the Fellowship Dashboard. This platform is your homebase
          for all resources, links, and assignments. Please check this page
          regularly for upcoming deadlines and events.
        </Text>
        <VStack
          spacing={10}
          mt={10}
          align="stretch"
          width="100%"
          overflow="auto"
        >
          <Box>
            <Text fontSize="xxxl" fontWeight="bold">
              Assignments
            </Text>
            <Assignments />
          </Box>
          <Box>
            <Text fontSize="4xl" fontWeight="bold">
              Calendar
            </Text>
            <Calendar />
          </Box>
        </VStack>
        <Footer />
      </Box>
    </>
  );
}

export default Dashboard;
