import { background, extendTheme } from "@chakra-ui/react";

const colors = {
  primary: {
    100: "#415A77", // darkest blue
    200: "#1B263B", // dark olive
    300: "#415A77", // blue
    400: "#778DA9", // lightest blue
    500: "#E0E1DD", // platinum
    600: "#3b413c",
    700: "#3b413c",
    800: "#3b413c",
    900: "#3b413c"
  }
};

const customTheme = extendTheme({ colors });

export default customTheme;