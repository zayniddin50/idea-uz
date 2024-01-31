import { Box, Container, Flex, Text } from "@chakra-ui/react";
import { UserButton, useUser } from "@clerk/clerk-react";
import { useContext, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { SlBasket } from "react-icons/sl";
import { Link } from "react-router-dom";
import { BaskentContext } from "../context/BaskentContext";

const Foreveryone = () => {
  const { user } = useUser();
  const { state } = useContext(BaskentContext);

  return (
    <Box w={"100%"} maxW={"100%"} position={"fixed"} bottom={0} bg={"#fff"}>
      <Container maxW={"80%"} w={"100%"}>
        <Flex
          display={{ base: "flex", lg: "none" }}
          p={{ base: "35px", sm: "24px" }}
          borderTopRadius={"10px"}
          justify={"space-between"}
          align={"center"}
          gap={"10px"}
        >
          <Box
            textAlign={"center"}
            alignItems={"center"}
            display={"flex"}
            flexDirection={"column"}
            fontSize={{ base: "10px", lg: "20px" }}
          >
            <CiHeart size={25} />
            <Text>Избранное</Text>
          </Box>
          <Link to={"/Korzinka"}>
            <Box
              alignItems={"center"}
              justifyContent={"center"}
              display={"flex"}
              flexDirection={"column"}
              fontSize={{ base: "10px", lg: "20px" }}
            >
              <Text
                // bg={"#FFBF3C"}
                color={"#FFBF3C"}
                borderRadius={"10px"}
                mt={"-44px"}
                pl={"38px"}
                position={"absolute"}
              >
                {state.length}
              </Text>
              <SlBasket size={25} />
              <Text>Корзина</Text>
            </Box>
          </Link>

          <Box
            textAlign={"center"}
            alignItems={"center"}
            display={"flex"}
            flexDirection={"column"}
            fontSize={{ base: "10px", lg: "20px" }}
          >
            <Link to={'/login'}>
              {user ? (
                <Box>
                  <UserButton />
                </Box>
              ) : (
                <Box>
                  <IoPersonOutline size={25} />
                  <Link to={"/login"}>Login</Link>
                </Box>
              )}
            </Link>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Foreveryone;
