import React from "react";
import {
  Box,
  Flex,
  Text,
  Link,
  Button,
  Image,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import working_together from "../images/working_together.jpeg"; // Ensure this path is correct

function Eligibility() {
  const listItems = [
    "are currently enrolled at an accredited high school or university",
    "will be within driveable distance of Lawrence, Kansas for the duration of the program",
    "are interested in blockchain, crypto, web3, or principles of decentralization",
    "think outside the box and ask good questions",
    "have demonstrated academic excellence in their field of study",
    "are motivated learners and self-starters with the ability to take ownership of their education and projects",
  ];

  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      align="center"
      justify="center"
      py={10}
      p={20} // consistent padding on all sides
      gap={5}
    >
      <Box textAlign="left" width={{ base: "100%", md: "50%" }}>
        <Text fontSize="xl" mt={5} fontWeight="bold">
          Eligibility
        </Text>
        <Text mt={3} fontSize="md">
          We are looking for candidates who:
        </Text>
        <UnorderedList mt={2} ml={5} fontSize="md">
          {listItems.map((item, index) => (
            <ListItem key={index}>{item}</ListItem>
          ))}
        </UnorderedList>
        <Text mt={3} fontSize="md" fontWeight="bold">
          Applications for Summer 2024 have closed.
        </Text>
        <Flex justifyContent="center" mt={4}></Flex>
      </Box>
      <Box
        width={{ base: "100%", md: "50%" }} // Takes full width on small screens
      >
        <Image
          src={working_together}
          alt="Working Together"
          objectFit="cover"
          borderRadius="xl"
          border="2px"
          borderColor="black"
          width="100%" // Ensures the image is responsive
        />
      </Box>
    </Flex>
  );
}

export default Eligibility;
