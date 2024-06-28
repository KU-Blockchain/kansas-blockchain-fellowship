import React, { useState } from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import QuickLoginAPI from "../components/QuickLoginAPI";
import QuickLogin from "../components/QuickLogin";

function Login() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }

  return (
    <Box textAlign="center" py={10}>
      <Text fontSize="xl" mt={5} fontWeight="extrabold" mx={6}>
        Fellow & Mentor Login
      </Text>
      <Text color="gray.200" mx="8vh" my="3vh">
        Click the Heirloom QuickLogin button below to login.
      </Text>
      <Box
      mt={4}
      p={5}
      height="200px"
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
        {/* <Button onClick={openModal} colorScheme="blue">Fellow QuickLogin</Button> */}
      </Box>
      {/* <QuickLoginAPI isOpen={isModalOpen} onClose={closeModal} /> */}
      {/* <Text color="gray.400" fontSize="md" mx="8vh">
        If you are having trouble accessing your credential or logging in,
        please contact the KBF team or reach out to
        kansasblockchainfellowship@gmail.com.
      </Text> */}
    </Box>
  );
}

export default Login;
