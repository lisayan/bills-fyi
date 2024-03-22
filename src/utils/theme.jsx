import { background, extendTheme } from "@chakra-ui/react";

const colors = {
  primary: {
    100: "#86e091",
    200: "#50d260",
    300: "#32c344",
    400: "#2daf3d",
    500: "#279936",
    600: "#22842e",
    700: "#1b6925",
    800: "#144d1b",
    900: "#0c2f10"
  }
};

const customTheme = extendTheme({ colors });

export default customTheme;