import React from "react";
import {
  Box,
  Image,
  Text,
  VStack,
  HStack,
  Link,
  useBreakpointValue,
} from "@chakra-ui/react";

const Mentor = ({
  headshot,
  name,
  company_logo,
  title,
  shortBio,
  linkedin,
  otherLinks,
  howToContact,
}) => {
  const isSmallScreen = useBreakpointValue({ base: true, md: false });

  return (
    <Box borderRadius="lg" borderWidth={3} m={3} w="full" p={5} boxShadow="md">
      {isSmallScreen ? (
        <VStack spacing={5} align="center">
          <Image
            src={headshot}
            borderRadius="full"
            boxSize="200px"
            objectFit="cover"
          />
          <VStack spacing={3} w="full">
            <Text fontSize="xl" fontWeight="bold">
              {name}
            </Text>
            <Image
              src={company_logo}
              borderRadius="full"
              boxSize="70px"
              objectFit="cover"
            />
            <Text fontSize="md" fontWeight="semibold">
              {title}
            </Text>
            <Text fontSize="sm" marginX={"20px"}>
              {shortBio}
            </Text>
            <Text fontSize="sm" color="purple.200" fontWeight="bold">
              To contact, {howToContact}
            </Text>
            <Text fontSize="md" mx="30px">
              <Link href={linkedin} color="blue.300" isExternal>
                LinkedIn
              </Link>
            </Text>
            {otherLinks && otherLinks.length > 0 && (
              <VStack spacing={1}>
                {otherLinks.map((link, index) => (
                  <Link key={index} href={link.url} color="blue.500" isExternal>
                    {link.title}
                  </Link>
                ))}
              </VStack>
            )}
          </VStack>
        </VStack>
      ) : (
        <HStack spacing={5}>
          <Image
            src={headshot}
            borderRadius="full"
            boxSize="200px"
            objectFit="cover"
          />
          <VStack spacing={3} w="full">
            <Text fontSize="xl" fontWeight="bold">
              {name}
            </Text>
            <Image
              src={company_logo}
              borderRadius="full"
              boxSize="70px"
              objectFit="cover"
            />
            <Text fontSize="md" fontWeight="semibold">
              {title}
            </Text>
            <Text fontSize="md" marginX={"20px"}>
              {shortBio}
            </Text>
            <Text fontSize="md" color="purple.200" fontWeight="bold">
              To contact, {howToContact}
            </Text>
            <Text fontSize="lg">
              <Link href={linkedin} color="blue.500" isExternal>
                LinkedIn
              </Link>
            </Text>
            {otherLinks && otherLinks.length > 0 && (
              <VStack spacing={1}>
                {otherLinks.map((link, index) => (
                  <Link key={index} href={link.url} color="blue.500" isExternal>
                    {link.title}
                  </Link>
                ))}
              </VStack>
            )}
          </VStack>
        </HStack>
      )}
    </Box>
  );
};

export default Mentor;
