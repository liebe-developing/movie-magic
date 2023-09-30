import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Flex,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { BsBoxArrowInRight } from "react-icons/bs";
import { navLinks } from "../constants";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsSun, BsMoonStarsFill } from "react-icons/bs";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const { colorMode, toggleColorMode } = useColorMode();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      bg={
        scrolled
          ? useColorModeValue("#ffffff9f", "rgb(23, 25, 35, 0.8)")
          : location.pathname === "/" && "transparent"
      }
      borderBottom={scrolled && "1px solid"}
      borderBottomColor={useColorModeValue(
        "rgba(193, 193, 193, 0.5)",
        "rgba(39, 43, 64, 0.5)"
      )}
      backdropFilter={scrolled ? "blur(200px)" : "none"}
      className={`w-full flex py-6 fixed top-0 z-20 select-none max-lg:px-5`}
    >
      <Box className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Flex className="items-center gap-10">
          <Link href="/" className="flex items-center gap-1">
            <Text className={`font-casablanca text-[30px]`}>مووی مجیک</Text>
          </Link>
        </Flex>
        <Flex className="flex items-center justify-between max-lg:hidden">
          <div className="flex items-center justify-center gap-12 cursor-pointer ">
            {navLinks.map((link) => (
              <Link
                to={link.href}
                key={link.engLabel}
                className="flex items-center gap-1.5 group"
              >
                <link.Icon className="w-6 h-6 group-hover:transition duration-500 ease-in-out transform group-hover:scale-125 text-orange-500" />
                <div className="leading-normal text-[13px]">
                  <p className={`font-iransans`}>{link.persianLabel}</p>
                  <p className="uppercase text-orange-500">{link.engLabel}</p>
                </div>
              </Link>
            ))}
          </div>
        </Flex>
        <Flex className="gap-2">
          <Button
            aria-label="Toggle Color Mode"
            onClick={toggleColorMode}
            variant="unstyled"
            display="flex"
            w="fit-content"
          >
            {colorMode === "light" ? (
              <BsMoonStarsFill
                className={"text-[#054949]"}
                w={{ base: "18px", md: "22px" }}
                h={{ base: "18px", md: "22px" }}
              />
            ) : (
              <BsSun
                w={{ base: "18px", md: "22px" }}
                h={{ base: "18px", md: "22px" }}
                className={"text-[#fbd38d]"}
              />
            )}
          </Button>
          <Button
            variant="unstyled"
            display="flex"
            gap={2}
            size="sm"
            onClick={() => navigate("/sign-in")}
            rounded={"2xl"}
            p={"18px"}
            bg={
              scrolled ? "gray.950" : useColorModeValue("gray.100", "#131313")
            }
            _hover={{ bg: useColorModeValue("", "orange.400") }}
            className="group"
          >
            وارد شوید
            <BsBoxArrowInRight
              className={`group-hover:${useColorModeValue(
                "",
                "text-gray-300"
              )} text-orange-500 w-4 h-4`}
            />
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default Navbar;
