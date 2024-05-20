import React from "react";
import DashboardNavbar from "../components/After_auth/DashboardNavbar";

import { Box, Text, Image } from "@chakra-ui/react";

function Resources() {
  return (
    <>
      <DashboardNavbar />
      <Box textAlign="center" py={10}>
        <Text fontSize="xl" mt={5} fontWeight="bold" mx={6}>
          Resources
        </Text>

        <Text textColor="gray.400" mr={"15vh"} ml={"15vh"} mt={"30px"}></Text>
      </Box>
    </>
  );
}

export default Resources;
