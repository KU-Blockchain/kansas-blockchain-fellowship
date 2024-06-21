import React from "react";
import { VStack, Text, Link, Box, HStack } from "@chakra-ui/react";
import Assignment from "./Assignment";

const Assignments = () => {
  const assignments = [
    {
      title: "Communication Channels Onboarding",
      description:
        "Download Telegram on your phone and computer. Join both groups at the links below. Once you join, read through the previous messages, check out the pinned message, and post an intro message to your peers and mentors. Also, join the KUBI Fellows Discord channel! We want you to get comfortable with Telegram/Discord, because these are the two main communication platforms for blockchain communities.",
      dueDate: "June 13th",
      estimatedHours: "1/2 an hour",
      links: [
        { url: "https://t.me/+qDe46K0DZf9mZmUx", label: "Official Chat Link" },
        { url: "https://t.me/+gBqUI7IqL4Q4ZDdh", label: "Fellows Only Link" },
        { url: "https://discord.gg/QxEDNaqP", label: "Discord Link" },
      ],
    },
    {
      title: "Add KBF Calendar to Your Digital Calendar",
      description:
        "Add KBF calendar to see all deadlines + class details. This should work for Google Calendar, Outlook, and Apple Calendar. If you fun into issues, you should be able to manually add it by subscribing to kansasblockchainfellowship@gmail.com on your calendar service. These deadlines and event details are also available at the calendar at the bottom of this page.",
      dueDate: "June 13th",
      estimatedHours: "10 minutes",
      links: [
        {
          url: "https://calendar.google.com/calendar/u/0?cid=a2Fuc2FzYmxvY2tjaGFpbmZlbGxvd3NoaXBAZ21haWwuY29t",
          label: "Click Here to Add",
        },
      ],
    },
    {
      title: "Create a Metamask Wallet",
      description:
        "More details on this will be released at our class on June 13th, but feel free to get a headstart on this.",
      dueDate: "June 20th",
      estimatedHours: "1 hour",
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
    {
      title: "Interview Assignment",
      estimatedHours: "2-3 hours",
      description:
        "Interview a mentor and write a brief article about them. Aim to interview them by June 26th. Plan to record your interview so that you can easily refer back to it. Emma will introduce you to your assigned mentor, and you can use that thread to schedule a call.",
      dueDate: "July 1st",
      links: [
        {
          url: "https://kublockchain.notion.site/Interview-Assignment-KBF-2024-57147c6178ce4214a3a2e097b3c57d38",
          label: "Full Instructions",
        },
        {
          url: "https://forms.gle/8SnZvtSwPtPXcACW7",
          label: "Submission",
        },
      ],
    },
    {
      title: "Research Assignment",
      description:
        "Research a topic you might want to build your capstone project around. Full instructions can be found at the instructions link below, under Part 1: Research Assignment.",
      estimatedHours: "5-6 hours",
      dueDate: "June 24th",
      links: [
        {
          url: "https://kublockchain.notion.site/Capstone-Design-Roadmap-32bb8749bf8d466a80a6fb15add79757",
          label: "Instructions",
        },
        {
          url: "https://forms.gle/R3favuk59gqrbPgx9",
          label: "Submission",
        },
      ],
    },
  ];

  return (
    <Box mx="auto" maxWidth="800px" width="100%">
      {" "}
      <VStack align="stretch" spacing={4}>
        {assignments.map((assignment, index) => (
          <Assignment key={index} {...assignment} />
        ))}
      </VStack>
    </Box>
  );
};

export default Assignments;
