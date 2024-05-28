import React from "react";
import { VStack, Text, Link, Box, Button } from "@chakra-ui/react";

const Assignment = ({ title, description, dueDate, links, submissionlink }) => {
  return (
    <Box
      align="stretch"
      p={4}
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="sm"
      bgGradient="linear(to-r, blue.200 0%, purple.200 100%)"
      bgClip="border-box"
      opacity={0.9}
    >
      <Text fontSize="xl" color="black" fontWeight="bold">
        {title}
      </Text>

      <Text fontWeight="extrabold" color="purple.700">
        Due {dueDate}
      </Text>
      <Text fontSize="md" pb="10px" color="black">
        {description}
      </Text>

      <VStack spacing={2}>
        {links.map((link, index) => (
          <Button
            color="black"
            key={index}
            as={Link}
            href={link.url}
            isExternal
            colorScheme="blue"
            variant="outline"
          >
            {link.label}
          </Button>
        ))}
      </VStack>
    </Box>
  );
};

export default Assignment;
