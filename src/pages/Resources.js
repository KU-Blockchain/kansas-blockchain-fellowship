import React from "react";

import { Box, Text, Image } from "@chakra-ui/react";

function Resources() {
  return (
    <>
      <Box textAlign="center" py={10}>
        <Text fontSize="xl" mt={5} fontWeight="bold" mx={6}>
          Resources
        </Text>

        <Text textColor="gray.400" mx="auto" mt={"30px"}>
          Throughout the summer, we will post class resources here, including
          class recordings and supplemental articles and videos.{" "}
        </Text>
      </Box>
    </>
  );
}

export default Resources;
