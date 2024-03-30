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
import working_together from "../images/working_together.jpeg";

function ApplicationInfo() {
  const listItems = [
    "are currently pursuing a bachelor's degree at University of Kansas, Kansas State University, Washburn University, or UMKC",
    "are interested in blockchain, crypto, web3, or principles of decentralization",
    "think outside the box and ask good questions",
    "have demonstrated academic excellence in their field of study",
    "are motivated learners and self-starters with the ability to take ownership of their education and projects",
  ];

  return (
    <Flex align="center" justify="center" py={10}>
      <Box flex="1" textAlign="left" px={5}>
        <Text fontSize="xl" mt={5} fontWeight="bold">
          Eligibility
        </Text>
        <Text mt={3} fontSize="md">
          We are looking for candidates who:
        </Text>
        <UnorderedList mt={2} ml={5} fontSize="sm">
          {listItems.map((item, index) => (
            <ListItem key={index}>{item}</ListItem>
          ))}
        </UnorderedList>
        <Link href="https://kublockchain.com/" isExternal>
          <Button colorScheme="blue" variant="outline" size="md" mt={4}>
            Apply Here
          </Button>
        </Link>
      </Box>
      <Box flex="1" px={5}>
        <Image
          src={working_together}
          alt="Working Together"
          objectFit="cover"
          borderRadius="md"
        />
      </Box>
    </Flex>
  );
}

export default ApplicationInfo;
