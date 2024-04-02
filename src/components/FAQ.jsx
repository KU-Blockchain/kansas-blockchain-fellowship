import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Heading,
} from "@chakra-ui/react";

const faqData = [
  {
    question: "Is the fellowship in person?",
    answer:
      "The fellowship is primarily for students within a driving distance of the University of Kansas. However, hybrid or remote participation may be available for exceptional candidates.",
  },
  {
    question: "Is food provided?",
    answer: "Meals will be provided for all in person fellows at every class.",
  },
  {
    question: "How will scholarships be distributed?",
    answer:
      "20% of the scholarship will be granted at the beginning of the program for students to use in crypto portfolio allocation. The other 80% scholarships will be paid out in full after the conclusion of the program, after successful completion of the program. There will also be an additional grant quadratically allocated to outstanding projects at the end of the program according democratically decided by the board overseeing the program.",
  },
  {
    question:
      "I'm a high school or non-traditional student. Can I still apply?",
    answer:
      "Exceptional students who do not meet the traditional requirements are still encouraged to apply.",
  },
];

function FAQ({ faqs = faqData }) {
  return (
    <Box margin={20}>
      <Heading mb={4} textAlign="center">
        FAQs
      </Heading>
      <Accordion allowToggle>
        {faqs.map((faq, index) => (
          <AccordionItem key={index}>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                {faq.question}
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>{faq.answer}</AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  );
}

export default FAQ;
