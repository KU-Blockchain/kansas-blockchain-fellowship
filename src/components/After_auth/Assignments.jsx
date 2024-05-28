import React from "react";
import { VStack, Text, Link, Box, HStack } from "@chakra-ui/react";
import Assignment from "./Assignment";

const Assignments = () => {
  const assignments = [
    {
      title: "Telegram Onboarding",
      description:
        "Download Telegram on your phone and computer. Join the group at the link below. Once you join, read through the previous messages, and post an intro message to your peers and mentors.",
      dueDate: "June 6th",
      links: [{ url: "https://example.com", label: "Telegram Link" }],
    },
    {
      title: "Create a Metamask Wallet",
      description:
        "More details on this will be released at our class on June 13th, but feel free to get a headstart on this.",
      dueDate: "June 20th",
      links: [
        {
          url: "https://www.youtube.com/watch?v=Af_lQ1zUnoM",
          label: "Tutorial",
        },
        {
          url: "https://forms.gle/nYGc9WuD97zvebBi7",
          label: "Instructions & Submission",
        },
      ],
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
