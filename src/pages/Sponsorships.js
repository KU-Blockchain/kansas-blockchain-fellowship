import React from "react";
import {
  Flex,
  Box,
  Image,
  Heading,
  Text,
  VStack,
  Link,
} from "@chakra-ui/react";
import learning from "../images/learning.jpeg";
import Footer from "../components/Footer";

function Sponsorships() {
  return (
    <>
      <VStack spacing={10} align="stretch">
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="center"
          padding={5}
        >
          <Box flex={1}>
            <Image
              src={learning} // Replace with the path to your image
              alt="Sponsorships"
              objectFit="cover"
              width="100%"
              height={{ base: "50vh", md: "100%" }} // Adjust height responsively
              borderRadius="md" // Optional: if you want rounded corners
            />
          </Box>
          <Flex
            flex={1}
            direction="column"
            alignItems="center"
            justifyContent="center"
            padding={5}
            borderWidth={2}
            borderColor={"blue.200"}
            borderRadius="md"
            margin={5}
          >
            <Heading as="h1" size="xl" textAlign="center">
              Sponsorships
            </Heading>
            <Text fontSize="lg" mt={3} textAlign="center">
              Sponsorships support student scholarships and ensure the program
              is accessible to all students. We are still accepting partnerships
              for the 2024 program.
            </Text>
          </Flex>
        </Flex>
        <Flex direction="column" align="center" justify="center" padding={5}>
          <Heading as="h2" size="lg" textAlign="center">
            Interested in partnering with us?
          </Heading>
          <Text fontSize="md" mt={3} textAlign="center">
            Contact us at{" "}
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
            </Link>
            .
          </Text>
        </Flex>
      </VStack>
      <Footer />
    </>
  );
}

export default Sponsorships;
