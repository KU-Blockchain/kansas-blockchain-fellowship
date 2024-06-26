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
        <Text mt={4} mx="auto" maxWidth="70%" textColor="gray.300">
          This platform is your homebase for all resources, links, and
          assignments. Please check this page regularly for upcoming deadlines
          and events.
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
              Calendar
            </Text>
            <Calendar />
          </Box>
          <Box>
            <Text fontSize="xxxl" fontWeight="bold">
              Assignments
            </Text>
            <Assignments />
          </Box>
        </VStack>
        <Footer />
      </Box>
    </>
  );
}

export default Dashboard;
