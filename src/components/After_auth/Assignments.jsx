import React from "react";
import { VStack, Text, Link, Box, HStack } from "@chakra-ui/react";
import Assignment from "./Assignment";

const Assignments = () => {
  const assignments = [
    {
      title: "Capstone Final Submission",
      description:
        "Here is the Devpost where you will submit your final Capstone project!",
      dueDate: "July 24th @ 9pm",
      estimatedHours: "3-4 hours",
      links: [
        {
          url: "https://kbf-capstones-24.devpost.com/",
          label: "Devpost Link",
        },
      ],
    },
    {
      title: "Closing Ceremony Slides",
      description:
        "Here is the slideshow we will go through at the Closing Cermoney. Please find your name and have your slides added by class on Thursday. You will have 3 minutes to present, and no live demos are allowed. If you include a video, please embed it within the slide.",
      dueDate: "July 25th (before class)",
      estimatedHours: "1.5 hours",
      links: [
        {
          url: "https://docs.google.com/presentation/d/16W-Gexg3K7SZfzPwYWGZ2AD5ZEOoO-oihcSX_xGYoHE/edit?usp=sharing",
          label: "Link to Slides",
        },
      ],
    },
    {
      title: "Resume Review Submission (Optional)",
      description:
        "If you want your resume included in the KBF talent pool, after your resume review, revise your resume according to your reviewer's suggestions. Then submit the revised version as a PDF here.",
      dueDate: "July 22nd",
      estimatedHours: "2 hours",
      links: [
        {
          url: "https://forms.gle/XrXzMeJjjXHxVVjU6",
          label: "Submit your Resume",
        },
      ],
    },

    {
      title: "Capstone Proposal Assignment",
      description:
        "Expand your topic into a thorough proposal. Full instructions can be found at the instructions link below.",
      dueDate: "July 3rd",
      estimatedHours: "2 hours",
      links: [
        {
          url: "https://docs.google.com/document/d/14P-E4HRdgS8wBDrWsxGGMLw6WC4D815StvLhCOsgl8A/edit?usp=sharing",
          label: "Instructions & Template",
        },
        {
          url: "https://forms.gle/tfSZcDrQJ7eQFvh89",
          label: "Submission",
        },
      ],
    },
    {
      title: "Capstone Topic Assignment",
      description:
        "Refine your research into a single topic. Full instructions can be found at the instructions link below, under Part 2: Topic Assignment.",
      estimatedHours: "1 hour (or less)",
      dueDate: "June 26th",
      links: [
        {
          url: "https://kublockchain.notion.site/Capstone-Design-Roadmap-32bb8749bf8d466a80a6fb15add79757",
          label: "Instructions",
        },
        {
          url: "https://docs.google.com/forms/d/e/1FAIpQLSf6EfyppDW2Diew2D4h2qNE7rBTm9Gs2ufs7bj4LSnhHY0oPA/viewform",
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
