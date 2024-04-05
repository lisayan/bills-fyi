import { background, extendTheme } from "@chakra-ui/react";

const colors = {
  primary: {
    100: "#9db5b2", // ash gray; header color
    200: "#3b413c", // black olive
    300: "#3b413c", // black olive
    400: "#3b413c",
    500: "#3b413c", // black olive; buttons
    600: "#3b413c",
    700: "#3b413c",
    800: "#3b413c",
    900: "#3b413c"
  }
};

const customTheme = extendTheme({ colors });

export default customTheme;