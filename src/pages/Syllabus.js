import React from "react";
import { Box, Text, Heading, VStack, Divider } from "@chakra-ui/react";

function Syllabus() {
  return (
    <Box maxW="90vw" mx="auto" p={5}>
      <Heading textAlign="center" mb={8} fontSize="2xl">
        Summer Learning Intensive: Blockchain
      </Heading>
      <Divider mb={8} />

      <VStack spacing={8} align="start">
        {/* Introduction Section */}
        <Box>
          <Heading as="h2" size="md" mb={2}>
            Introduction
          </Heading>
          <Text fontSize="md">
            Welcome to the summer learning intensive about blockchain
            technology. This course aims to provide a comprehensive
            understanding of blockchain concepts, applications, and development
            practices.
          </Text>
        </Box>

        {/* Course Objectives Section */}
        <Box>
          <Heading as="h2" size="md" mb={2}>
            Course Objectives
          </Heading>
          <Text fontSize="md">
            By the end of this course, students will be able to:
          </Text>
          <VStack align="start" pl={5} spacing={1}>
            <Text fontSize="md">
              - Understand the fundamentals of blockchain technology.
            </Text>
            <Text fontSize="md">
              - Explore various blockchain platforms and their uses.
            </Text>
            <Text fontSize="md">- Develop and deploy smart contracts.</Text>
            <Text fontSize="md">
              - Analyze the impact of blockchain on different industries.
            </Text>
          </VStack>
        </Box>

        {/* Course Schedule Section */}
        <Box>
          <Heading as="h2" size="md" mb={2}>
            Course Schedule
          </Heading>
          <VStack align="start" pl={5} spacing={1}>
            <Text fontSize="md">
              <strong>Week 1:</strong> Introduction to Blockchain
            </Text>
            <Text fontSize="md">
              <strong>Week 2:</strong> Blockchain Platforms
            </Text>
            <Text fontSize="md">
              <strong>Week 3:</strong> Smart Contracts Development
            </Text>
            <Text fontSize="md">
              <strong>Week 4:</strong> Blockchain Applications
            </Text>
            <Text fontSize="md">
              <strong>Week 5:</strong> Industry Case Studies
            </Text>
            <Text fontSize="md">
              <strong>Week 6:</strong> Final Project
            </Text>
          </VStack>
        </Box>

        <Box>
          <Heading as="h2" size="md" mb={2}>
            Assessment
          </Heading>
          <Text fontSize="md">
            Students will be assessed based on their participation, assignments,
            and final project. The breakdown is as follows:
          </Text>
          <VStack align="start" pl={5} spacing={1}>
            <Text fontSize="md">- Participation: 20%</Text>
            <Text fontSize="md">- Assignments: 40%</Text>
            <Text fontSize="md">- Final Project: 40%</Text>
          </VStack>
        </Box>

        {/* Resources Section */}
        <Box>
          <Heading as="h2" size="md" mb={2}>
            Resources
          </Heading>
          <Text fontSize="md">
            Recommended readings and resources will be provided throughout the
            course to enhance learning and understanding.
          </Text>
        </Box>

        {/* Contact Information Section */}
        <Box>
          <Heading as="h2" size="md" mb={2}>
            Contact Information
          </Heading>
          <Text fontSize="md">
            If you have any questions or need further assistance, please reach
            out to the course instructor at{" "}
            <strong>instructor@example.com</strong>.
          </Text>
        </Box>
      </VStack>
    </Box>
  );
}

export default Syllabus;
