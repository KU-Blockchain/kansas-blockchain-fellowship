import React from "react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Text,
  Link as ChakraLink,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";
import logo from "../images/logo.png";
import { useColorMode, Button } from "@chakra-ui/react";

function Navbar() {
  const linkStyle = {
    marginRight: "5",
    padding: "3px 10px",
    borderRadius: "md",
    border: "2px solid white",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    _hover: {
      textDecoration: "none",
      backgroundColor: "white",
      color: "purple.600",
    },
    fontSize: "md",
  };

  const ColorModeSwitcher = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
      <Button onClick={toggleColorMode} sx={linkStyle}>
        {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      </Button>
    );
  };

  // Determine if the navbar should be collapsed based on the breakpoint
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1rem"
      bgGradient="linear(to-r, orange.500, pink.500)"
      color="white"
    >
      <Flex align="center">
        <ChakraLink as={Link} to="/" display="flex" alignItems="center">
          <Image src={logo} boxSize="50px" pb="4px" marginRight="12px" />

          <Text fontSize="md" fontWeight="bold">
            The Kansas Blockchain Fellowship
          </Text>
        </ChakraLink>
      </Flex>
      {isMobile ? (
        <Menu>
          <MenuButton
            as={IconButton}
            icon={<HamburgerIcon />}
            variant="outline"
            color="white"
          />
          <MenuList>
            <MenuItem as={Link} to="/about">
              About
            </MenuItem>
            <MenuItem as={Link} to="/sponsorships">
              Sponsorships
            </MenuItem>
            <MenuItem as={Link} to="/applications">
              Applications
            </MenuItem>
            <MenuItem>
              <ColorModeSwitcher as={Link} />
            </MenuItem>
            {/* Add more navigation links as needed */}
          </MenuList>
        </Menu>
      ) : (
        <Box display="flex" alignItems="center">
          <ChakraLink as={Link} to="/about" sx={linkStyle}>
            About
          </ChakraLink>
          <ChakraLink as={Link} to="/sponsorships" sx={linkStyle}>
            Sponsorships
          </ChakraLink>
          <ChakraLink as={Link} to="/applications" sx={linkStyle}>
            Applications
          </ChakraLink>
          <ColorModeSwitcher />
          {/* Add more navigation links as needed */}
        </Box>
      )}
    </Flex>
  );
}

export default Navbar;
