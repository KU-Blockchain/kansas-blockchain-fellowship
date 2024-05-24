import React from "react";
import { Box, Text } from "@chakra-ui/react";
import QuickLogin from "../components/QuickLogin";

function Login() {
  return (
    <Box textAlign="center" py={10}>
      <Text fontSize="xl" mt={5} fontWeight="bold" mx={6}>
        Fellow and Mentor Login
      </Text>
      <Text color="gray.400" mx="15vh">
        Click the button below to log in.
      </Text>
      <Box
        mt={4}
        p={5}
        height="400px"
        borderWidth="2px"
        borderColor="orange"
        borderRadius="lg"
        backgroundColor="white"
        maxW="sm"
        mx="auto"
        display="flex"
        justifyContent="center"
        alignItems="center"
        id="quicklogin-container"
      >
        <QuickLogin />
      </Box>
    </Box>
  );
}

export default Login;
