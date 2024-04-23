import React from "react";
import {
  Box,
  Heading,
  Button,
  Text,
  Flex,
  VStack,
  Link,
  Image,
} from "@chakra-ui/react";
import community from "../images/community.jpeg";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Eligibility from "../components/Eligibility";

function Applications() {
  return (
    <>
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        padding={5}
      >
        <Box
          marginTop={10}
          padding="5" // Add some padding around the box content
          boxShadow="lg" // Optional: adds a shadow to the box for better visibility
          rounded="md" // Optional: rounds the corners of the box
          borderColor="purple.200" // Optional: sets the border color
          borderWidth={2}
          maxWidth="75vw" // Limits the width of the box and centers content
          w="full"
        >
          <VStack spacing={4}>
            {" "}
            {/* Stack the heading and button vertically */}
            <Heading as="h1" size="lg" textAlign="center">
              Applications for Summer 2024 are now open
            </Heading>
            <Text textAlign="center">
              Applications are considered on a rolling basis. The application
              window will close April 30, 2024 at 11:59pm CST. Applicants may be
              offered an interview, which will be a 45 minute conversation with
              2-3 members of the admissions committee.{" "}
            </Text>
            <Button
              colorScheme="teal"
              size="md"
              onClick={() =>
                window.open("https://forms.gle/EeXM3tLGEyLaWY1PA", "_blank")
              }
            >
              Apply Here
            </Button>
          </VStack>
        </Box>
      </Flex>
      <Eligibility />
      <FAQ />
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        padding={5}
      >
        <Box
          padding="5" // Add some padding around the box content
          boxShadow="lg" // Optional: adds a shadow to the box for better visibility
          rounded="md" // Optional: rounds the corners of the box
          borderColor="blue.200" // Optional: sets the border color
          borderWidth={2}
          maxWidth="75vw" // Limits the width of the box and centers content
          w="full"
        >
          <Image
            src={community} // Replace with the path to your image
            alt="Sponsorships"
            objectFit="cover"
            width="100%"
            height={{ base: "50vh", md: "100%" }} // Adjust height responsively
            borderRadius="md" // Optional: if you want rounded corners
          />{" "}
        </Box>
      </Flex>

      <Text mt={5} fontSize="xs" textAlign="center">
        Please reach out to{" "}
        <Link
          href="mailto:kansasblockchainfellowship@gmail.com"
          color="pink.500"
          isExternal
          textDecoration="underline"
          _hover={{
            textDecoration: "none",
          }}
        >
          kansasblockchainfellowship@gmail.com
        </Link>{" "}
        with any questions regarding the program.
      </Text>
      <Footer />
    </>
  );
}

export default Applications;
