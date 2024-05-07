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

function ProgramOutline() {
  const listItems = [
    "classes at KU's campus every Thursday from 7:00 - 9:00 PM CST",
    "meals provided at every class",
    "a scholarship of granted in full upon completion of the program",
    "a bonus, quadratically allocated award pool for outstanding projects",
    "unique portfolio building and networking opportunities",
  ];

  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      align="center"
      justify="center"
      py={10}
      gap={5}
    >
      <Box
        px={5}
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
      <Box textAlign="left" px={5} width={{ base: "100%", md: "50%" }}>
        <Text fontSize="xl" mt={5} fontWeight="bold">
          Program Outline
        </Text>
        <Text mt={3} fontSize="md">
          The Fellowship will consist of:
        </Text>

        <UnorderedList mt={7} ml={5} fontSize="md">
          {listItems.map((item, index) => (
            <ListItem key={index}>{item}</ListItem>
          ))}
        </UnorderedList>
        <Text mt={3} fontSize="md" fontWeight="bold">
          Applications close May 10, 2024 at 11:59 PM CST.
        </Text>
        <Flex justifyContent="center" mt={4}>
          <Link href="https://forms.gle/Ej9kwQueqKgPjgJp6" isExternal>
            <Button colorScheme="pink" variant="outline" size="md">
              Apply Here
            </Button>
          </Link>
        </Flex>
      </Box>
    </Flex>
  );
}

export default ProgramOutline;
