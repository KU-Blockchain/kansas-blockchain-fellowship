import React from "react";

import { Box, Text, Image } from "@chakra-ui/react";
import QuickLogin from "../components/QuickLogin";

function Login() {
  return (
    <Box textAlign="center" py={10}>
      <Text fontSize="xl" mt={5} fontWeight="bold" mx={6}>
        Fellow and Mentor Login
      </Text>
      <Text textColor="gray.400" mr={"15vh"} ml={"15vh"}>
        Scan the QR code to log in.
      </Text>
      <QuickLogin />
      <Text textColor="gray.400" mr={"15vh"} ml={"15vh"} mt={"30px"}></Text>
    </Box>
  );
}

export default Login;
