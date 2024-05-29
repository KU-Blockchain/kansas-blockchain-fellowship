
import React, { useState, useEffect, useRef } from "react";
import { Box, Text, Heading, VStack, Divider, SimpleGrid, Link, Breadcrumb, BreadcrumbItem, BreadcrumbLink, UnorderedList, ListItem, Flex, HStack, useBreakpointValue } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";


function Syllabus() {
  const [isSticky, setSticky] = useState(false);
  const navRef = useRef(null);
  const sentinelRef = useRef(null);
  const isMobile = useBreakpointValue({ base: true, md: false });

  const handleScroll = () => {
    if (sentinelRef.current) {
      const sentinelPosition = sentinelRef.current.getBoundingClientRect().top;
      setSticky(sentinelPosition <= 0);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (

    <Box maxW="90vw" mx="auto" p={5}>
      <Heading as="h1" textAlign="center" mb={8}>
        Summer Learning Intensive: Blockchain
      </Heading>
      <Divider mb={8} />

      <VStack spacing={10} align="start">
        {/* Introduction Section */}
        <Box>
          <Heading as="h2" size="md" mb={2}>
            Introduction
          </Heading>
          <Text>
            Welcome to the summer learning intensive about blockchain
            technology. This course aims to provide a comprehensive
            understanding of blockchain concepts, applications, and development
            practices.
          </Text>
        </Box>
      </VStack>

      <br></br>

      <Flex>
      
      { /* Navigation */}
      {isMobile ? (
        null
      ) : (
        <Box
          as="nav"
          w="260px"
          py={4}
          p={3}
          position={isSticky ? 'fixed' : 'relative'}
          top={isSticky ? '0' : 'auto'}
          h={isSticky ? '100vh' : 'auto'}
          overflowY="auto"
          transition="top 0.3s"
          ref={navRef}
          flexShrink={0}
        >
          <VStack align="start" spacing={2}>
            <Heading as="h1" size="md">Navigation</Heading>
            <Link fontSize="md" href="#about-the-fellowship"><ChevronRightIcon />About</Link>
            <Link fontSize="md" href="#objectives"><ChevronRightIcon />Objectives</Link>
            <Link fontSize="md" href="#note-to-fellows"><ChevronRightIcon />Note</Link>
            <Link fontSize="md" href="#responsibility"><ChevronRightIcon />Responsibility</Link>
            <Link fontSize="md" href="#health-and-safety"><ChevronRightIcon />Health & Safety</Link>
            <Link fontSize="md" href="#curriculum"><ChevronRightIcon />Curriculum</Link>
            <Link fontSize="md" href="#mentorship"><ChevronRightIcon />Mentorship</Link>
            <Link fontSize="md" href="#evaluation"><ChevronRightIcon />Evaluation</Link>
            <Link fontSize="md" href="#quizzes"><ChevronRightIcon />Quizzes</Link>
            <Link fontSize="md" href="#capstone-project"><ChevronRightIcon />Capstone</Link>
            <Link fontSize="md" href="#scholarship"><ChevronRightIcon />Scholarship</Link>
            <Link fontSize="md" href="#intellectual-property"><ChevronRightIcon />IP</Link>
            <Link fontSize="md" href="#links"><ChevronRightIcon />Links</Link>
          </VStack>
        </Box>
      )}

      {/* Main Content */}
      <Box ml={isSticky ? '260px' : '0'} w="full">
        {isMobile ? ( null ) : ( <Box ref={sentinelRef} height="0"/> )} {/* Sentinel element to detect the top of the navRef */}
        <VStack spacing={10} align="stretch" p={4} id="syllabus-content">
          <SimpleGrid columns={[1, null, 2]} spacing={7}>
            <Box>
              <Heading as="h2" size="lg">
                Program Director
              </Heading>
              <Text as='u'>Emma Nasseri</Text>
              <Text>Email: <Link href="mailto:emma@ku.edu">emma@ku.edu</Link></Text>
              <Text>Telegram: @emnasseri</Text>
            </Box>
            <Box>
              <Heading as="h2" size="lg">
                Vice Director
              </Heading>
              <Text as='u'>Jahnvi Maddila</Text>
              <Text>Email: <Link href="mailto:jahnvi.maddila@ku.edu">jahnvi.maddila@ku.edu</Link></Text>
              <Text>Telegram: @jahnvimaddila</Text>
            </Box>
            <Box>
              <Heading as="h2" size="lg">
                Director of Education
              </Heading>
              <Text as='u'>Micah Borghese</Text>
              <Text>Email: <Link href="mailto:micah@ku.edu">micah@ku.edu</Link></Text>
              <Text>Telegram: @micahborghese</Text>
            </Box>
            <Box>
              <Heading as="h2" size="lg">
                Head of Partnerships
              </Heading>
              <Text as='u'>Yash Prajapati</Text>
              <Text>Email: <Link href="mailto:yash@ku.edu">yash@ku.edu</Link></Text>
              <Text>Telegram: @poseidonyash</Text>
            </Box>
            <Box>
              <Heading as="h2" size="lg">
                Program Location
              </Heading>
              <Text>KU LEEP2 Room 2420</Text>
              <Text>Address: 1536 W 15 St, Lawrence, KS 66045</Text>
            </Box>

            <Box>
              <Heading as="h2" size="lg">
                Meeting Times
              </Heading>
              <Text>June 6, 13, 20, 27</Text>
              <Text>July 2, 11, 18, 25</Text>
              <Text>Closing Ceremony: July 26</Text>
            </Box>
          </SimpleGrid>

          <Box id="about-the-fellowship">
            <Heading as="h2" size="md" mb={2}>
              About the Fellowship
            </Heading>
            <Text>
              The Kansas Blockchain Fellowship is a seven-week, experiential learning intensive, scholarship program, and talent
              incubator to prepare local students for careers in blockchain and web3.
            </Text>
            <Text>
              The fellowship involves:
              <UnorderedList>
                <ListItem>Hands-on learning.</ListItem>
                <ListItem>Lectures from industry leaders.</ListItem>
                <ListItem>Education and support from the KU Blockchain research & education team.</ListItem>
                <ListItem>Individual, self-guided capstone project for each fellow.</ListItem>
              </UnorderedList>
            </Text>
          </Box>

          <Box id="objectives">
            <Heading as="h2" size="md" mb={2}>
              Fellowship Objectives
            </Heading>
            <Text>
              By the end of this course, students will be able to:
              <UnorderedList>
                <ListItem>Understand the fundamentals of blockchain technology.</ListItem>
                <ListItem>Explore various blockchain platforms and their uses.</ListItem>
                <ListItem>Develop and deploy smart contracts.</ListItem>
                <ListItem>Analyze the impact of blockchain on different industries.</ListItem>
              </UnorderedList>
            </Text>
          </Box>

          <Box id="note-to-fellows">
            <Heading as="h2" size="md" mb={2}>
              A Note to Each Fellow
            </Heading>
            <Text>
              Welcome to the Kansas Blockchain Fellowship! We are excited to welcome you into the program. This document lists
              the policies you are bound to accept as an admitted fellow. It is a must for you to read and understand this document
              fully. Please direct any questions to the Director of Education or contact the Program Director for clarifications, if
              there are any statements that are unclear in the document.
            </Text>
          </Box>

          <Box id="responsibility">
            <Heading as="h2" size="md" mb={2}>
              Your Responsibility
            </Heading>
            <UnorderedList>
              <ListItem>Attend all class meetings. Attendance for class will be taken through Heirloom.</ListItem>
              <ListItem>Complete all in-class activities and submit deliverables on-time.</ListItem>
              <ListItem>Complete a capstone project that demonstrates growth in the program.</ListItem>
            </UnorderedList>
          </Box>

          <Box id="health-and-safety">
            <Heading as="h2" size="md" mb={2}>
              Health and Safety
            </Heading>
            <Text>
              Kansas Blockchain Fellowship will adhere to all University policies (of the University of Kansas) related to health and
              safety, including the Protect KU Pledge. It is your responsibility to follow the university rules whenever you visit the
              campus. That being said, if you face challenges to fully participate at any time during the semester or you expect to
              miss class, please contact the Program Director and explain your situation as early as you can so we can try to make
              accommodations.
            </Text>
          </Box>

          <Box id="curriculum">
            <Heading as="h2" size="md" mb={2}>
              Educational Curriculum
            </Heading>
            <VStack align="start" pl={5} spacing={1}>
              <Text>
                <strong>Week 1:</strong> Introduction to Blockchain
              </Text>
              <Text>
                <strong>Week 2:</strong> Blockchain Platforms
              </Text>
              <Text>
                <strong>Week 3:</strong> Smart Contracts Development
              </Text>
              <Text>
                <strong>Week 4:</strong> Blockchain Applications
              </Text>
              <Text>
                <strong>Week 5:</strong> Industry Case Studies
              </Text>
              <Text>
                <strong>Week 6:</strong> Final Project
              </Text>
            </VStack>
          </Box>

          <Box id="mentorship">
            <Heading as="h2" size="md" mb={2}>
              Mentorship
            </Heading>
            <Text>
              Mentors are available throughout every step of the fellowship program. All mentors are volunteers. The program
              organizers will help facilitate communication between fellows and mentors through introductions and class discussions,
              but fellows are encouraged to set up their own meetings with all of the mentors during the summer.
            </Text>
          </Box>

          <Box id="evaluation">
            <Heading as="h2" size="md" mb={2}>
              Evaluation
            </Heading>
            <Text>
              Deliverables mentioned in the table above are mandatory, while readings are optional but highly encouraged. In addition, a
              few quizzes will be given in class on paper during the program. There is no letter or percentage grading in the program.
              Rather, fellows will receive feedback during the course of the program.
            </Text>
          </Box>

          <Box id="quizzes">
            <Heading as="h2" size="md" mb={2}>
              Quizzes
            </Heading>
            <Text>
              Pop quizzes in the program are meant to enforce conceptual understanding of the material we teach and not at all to
              assess an individual’s technical ability. All quizzes will be pencil and paper. That said, please bring a writing utensil with
              you to class. Written feedback on each quiz will be made available prior to the next class.
            </Text>
          </Box>

          <Box id="capstone-project">
            <Heading as="h2" size="md" mb={2}>
              Capstone Project
            </Heading>
            <Text>
              The capstone project is meant to be an application of what a fellow has learned in class. Guidance and feedback will be
              thoroughly provided for completing this project. However, it is the fellow’s responsibility to reach out to the organizers or
              mentors as help is needed.
            </Text>
          </Box>

          <Box id="scholarship">
            <Heading as="h2" size="md" mb={2}>
              Scholarship
            </Heading>
            <Text>
              Each fellow will receive a $400 scholarship for their time and work in the Kansas Blockchain Fellowship program. 20% of
              the scholarship will be granted at the beginning of the program for fellows, while the other 80% of the scholarship will be
              paid out in full after the conclusion of the program, after successful completion of the program.
            </Text>
            <Text>
              There will also be an additional grant quadratically allocated to outstanding projects at the end of the program according
              democratically decided by the board overseeing the program.
            </Text>
            <Text>
              The board will include:
            </Text>
            <UnorderedList>
              <ListItem>Faculty advisors</ListItem>
              <ListItem>Distinguished University of Kansas Alumni working in Web3</ListItem>
              <ListItem>Representatives from our sponsors and partners</ListItem>
            </UnorderedList>
          </Box>

          <Box id="intellectual-property">
            <Heading as="h2" size="md" mb={2}>
              Intellectual Property
            </Heading>
            <Text>
              During the program, mentors may share their own teaching materials. It is important to get explicit permission from the
              individual sharing the materials before using them for a purpose outside of the fellowship program.
            </Text>
            <Text>
              Every class will be recorded, and by participating in the program you are agreeing to be in videos and photos representing
              the program. These class recordings will be provided to all fellows and will remain property of the Kansas Blockchain
              Fellowship. Video, audio recording, or photography is permitted. However, commercial use of such recordings or videos
              without consent is prohibited.
            </Text>
            <Text>
              Fellows will have complete ownership over their own capstone projects. It is the fellow’s responsibility to assure their
              project and code is free from plagiarism.
            </Text>
          </Box>

          <Box id="links">
            <Heading as="h2" size="md" mb={2}>
              Important Links to Resources
            </Heading>
            <Text>
              Official Site: <Link href="https://www.kansasblockchain.org/" isExternal>https://www.kansasblockchain.org/</Link>
            </Text>
            <Text>
              Fellow Login: <Link href="https://www.kansasblockchain.org/login" isExternal>https://www.kansasblockchain.org/login</Link>
            </Text>
          </Box>
        </VStack>
      </Box>
    </Flex>
    </Box>

  );
}

export default Syllabus;
