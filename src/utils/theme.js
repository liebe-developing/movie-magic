import { extendTheme, useColorModeValue } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: true,
  },
  styles: {
    global: () => ({
      body: {
        bg: useColorModeValue("gray.100", "gray.900"),
        color: useColorModeValue("gray.900", "gray.300"),
        direction: "rtl",
        fontFamily: "IRANsans",
        "&::-webkit-scrollbar": {
          width: "6px",
        },
        "&::-webkit-scrollbar-track": {
          width: "4px",
        },
        "&::-webkit-scrollbar-thumb": {
          background: useColorModeValue("#aaa", "#4f5765"),
          borderRadius: "34px",
        },
      },
    }),
  },
});

export default theme;
