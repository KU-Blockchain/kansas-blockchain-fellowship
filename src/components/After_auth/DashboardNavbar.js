import React from "react";
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
  useColorMode,
  Button,
} from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";
import logo from "../../images/logo.png";

function PublicNavbar() {
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
  const { colorMode, toggleColorMode } = useColorMode();
  const location = useLocation();
  const isMobile = useBreakpointValue({ base: true, md: false });
  const onDashboard = location.pathname === "/dashboard";

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
      {isMobile || onDashboard ? (
        <Menu>
          <MenuButton
            as={IconButton}
            icon={<HamburgerIcon />}
            variant="outline"
            color="white"
          />
          <MenuList>
            <MenuItem as={Link} to="/dashboard/resources">
              Resources
            </MenuItem>
            <MenuItem as={Link} to="/dashboard/directory">
              Directory
            </MenuItem>
            <MenuItem as={Link} to="/dashboard/syllabus">
              Syllabus
            </MenuItem>

            {/* Add more navigation links as needed */}
          </MenuList>
        </Menu>
      ) : (
        <Box display="flex" alignItems="center">
          <ChakraLink as={Link} to="/dashboard/resources" sx={linkStyle}>
            Resources
          </ChakraLink>
          <ChakraLink as={Link} to="/dashboard/directory" sx={linkStyle}>
            Directory
          </ChakraLink>
          <ChakraLink as={Link} to="/dashboard/syllabus" sx={linkStyle}>
            Syllabus
          </ChakraLink>
        </Box>
      )}
    </Flex>
  );
}

export default PublicNavbar;
