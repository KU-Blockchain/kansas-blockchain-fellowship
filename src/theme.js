import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: '"Inconsolata", monospace', // Use for headings
    body: '"Inconsolata", monospace', // Use for body text
  },
  fontSizes: {
    md: "16px", // Default font size for body text
    lg: "32px", // Approximately 2x larger than md
    xl: "48px", // Approximately 3x larger than md
  },
  // You can also add styles globally to affect all text
  styles: {
    global: {
      body: {
        fontSize: "lg", // Now using 'lg' size for body text
      },
      // Customizing headings globally might require targeting specific components or using component styles
    },
  },
  components: {
    // Example of targeting all Heading components
    Heading: {
      baseStyle: {
        fontSize: "xl", // Now using 'xl' for all headings by default
        fontWeight: "900",
      },
    },
    // You can add customizations for other components here as needed
  },
});

export default theme;
