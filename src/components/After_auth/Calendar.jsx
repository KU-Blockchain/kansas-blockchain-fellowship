import React, { useEffect } from "react";
import { Box } from "@chakra-ui/react";

function Calendar() {
  useEffect(() => {
    // Function to load an external script
    const loadScript = () => {
      const script = document.createElement("script");
      script.async = true;
      script.type = "module";
      script.src = "https://embed.styledcalendar.com/assets/parent-window.js";
      document.body.appendChild(script);

      return () => {
        // Cleanup the script when the component unmounts
        document.body.removeChild(script);
      };
    };

    // Call the function to load the script
    loadScript();
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <Box width="100%" padding="10">
      <iframe
        src="https://embed.styledcalendar.com/#6vX0l2477FGal4mX2fm8"
        title="Styled Calendar"
        className="styled-calendar-container"
        style={{ width: "100%", height: "500px", border: "none" }} // Set height here
        data-cy="calendar-embed-iframe"
      />
    </Box>
  );
}

export default Calendar;
