import React from "react";

import { Box, Text, Image } from "@chakra-ui/react";

function Dashboard() {
  return (
    <Box textAlign="center" py={10}>
      <Text fontSize="xl" mt={5} fontWeight="bold" mx={6}>
        Welcome Fellows and Mentors!
      </Text>

      <Text textColor="gray.400" mr={"15vh"} ml={"15vh"} mt={"30px"}></Text>
    </Box>
  );
}

export default Dashboard;
