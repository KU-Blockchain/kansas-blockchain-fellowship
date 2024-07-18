import React, { useEffect } from "react";
import About from "../components/AboutPreview";
import Welcome from "../components/Welcome";
import { Box, Image } from "@chakra-ui/react";
import Team from "../components/Team";
import Mentors from "../components/Mentors";
//import ColorModeSwitcher from "../components/ColorModeSwitcher";
import WindmillImage from "../components/WindmillImage";
import ThreeCircles from "../components/ThreeCircles";
import Footer from "../components/Footer";
import Eligibility from "../components/Eligibility";
import Fellows from "../components/Fellows";
import ProgramOutline from "../components/ProgramOutline";
import { ModalCloseButton, Link, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@chakra-ui/react";

function Home() {
  // const [isOpen, setIsOpen] = React.useState(false);

  // useEffect(() => {
  //   setIsOpen(true);
  // }, []);

  // const handleClose = () => {
  //   setIsOpen(false);
  // };

  return (
    <Box className="Home">
      {/* <ColorModeSwitcher /> */}
      <Welcome />
      <About />
      {/* <ThreeCircles /> */}
      <Mentors id="mentors"/>
      <Fellows id="fellows"/>

      <Team />

      <WindmillImage />
      <ProgramOutline />
      <Footer />

      {/* <Modal isOpen={isOpen} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            Closing Ceremony
            <ModalCloseButton />
          </ModalHeader>
          <ModalBody>
            Join us for the closing ceremony on July 26th to celebrate the successful completion of the program.
          </ModalBody>
          <ModalFooter>
            <Button as={Link} mr={3} onClick={handleClose}>
              Close
            </Button>
            <Button as={Link} onClick={handleClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal> */}
    </Box>
  );
}

export default Home;
