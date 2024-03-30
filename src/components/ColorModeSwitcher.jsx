import { useColorMode, Button } from "@chakra-ui/react";

const ColorModeSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button onClick={toggleColorMode}>
      {colorMode === "light" ? "Dark" : "Light"} mode
    </Button>
  );
};

export default ColorModeSwitcher;
