import React from "react";
import { VStack, Text, Link, Box, HStack } from "@chakra-ui/react";
import Assignment from "./Assignment";

const Assignments = () => {
  const assignments = [
    {
      title: "Research Project",
      description: "Complete the research on XYZ topic.",
      dueDate: "2024-06-10",
      otherLinks: [
        { url: "https://example.com", label: "More Info" },
        { url: "https://example.com", label: "Example" },
      ],
      submissionlink: "https://example.com",
    },
    {
      title: "Essay on Blockchain",
      description: "Write an essay on the impact of blockchain technology.",
      dueDate: "2024-06-15",
      otherLinks: [{ url: "https://example.com", label: "Submit Here" }],
      submissionlink: "https://example.com",
    },
  ];

  return (
    <VStack align="stretch" spacing={4}>
      {assignments.map((assignment, index) => (
        <Assignment key={index} {...assignment} />
      ))}
    </VStack>
  );
};

export default Assignments;
