import React from "react";
import { Box, Image } from "@chakra-ui/react";
import windmills from "../images/windmills.png";

function WindmillImage() {
  return (
    <Box height="50vh" width="100%" position="relative">
      {" "}
      {/* Set the height to 30% of the viewport height */}
      <Image
        src={windmills}
        borderRadius="lg"
        maxH="100%" // Maximum height of the image is 100% of the parent Box
        maxW="100%" // Maximum width of the image is 100% of the parent Box
        objectFit="contain" // 'contain' will ensure the aspect ratio is maintained and the entire image is visible
        position="absolute" // Position absolute to stay within the Box
        top="0" // Align top
        left="0" // Align left
        right="0" // Align right
        bottom="0" // Align bottom
        margin="auto" // Center the image within the Box
      />
    </Box>
  );
}

export default WindmillImage;
