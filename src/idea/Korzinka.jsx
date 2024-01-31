import { BaskentContext } from "../context/BaskentContext";
import {
  Box,
  Container,
  Flex,
  Image,
  Text,
  Heading,
  Button,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { FaRegTrashAlt } from "react-icons/fa";
import "../idea/Korazinka.css";

import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { BasentLike } from "../context/BasentLike";
import { FaArrowLeft } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import Foreveryone from "../components/Foreveryone";
const Korzinka = () => {
  const { state, setState } = useContext(BaskentContext);

  const { addToStorage } = useContext(BaskentContext);
  const { addTOlike } = useContext(BasentLike);

  const addToBaskent = product => {
    addToStorage(product);
  };
  const addToLike = product => {
    addTOlike(product);
  };

  //  ////////////////////////////////  ////////////////////////////////  ////////////////////////////////  ////////////////////////////////  ////////////////////////////////  //////////////////////////////

  let arr = state.map(elem => {
    return {
      ...elem,
      count: 1,
    };
  });

  let remove = id => {
    let newData = count.filter(item => item.id !== id);
    setCount(newData);
    setState(newData);
  };
  // state array
  let [count, setCount] = useState(arr);
  //  ////////////////////////////////////////////////////////////////  ////////////////////////////////  ////////////////////////////////  ////////////////////////////////  //////////////////////////////
  const decCrease = id => {
    let newCount = count.map(elem => {
      if (elem.id === id) {
        return {
          ...elem,
          count: elem.count + 1,
        };
      }
      return elem;
    });
    setCount(newCount);
  };
  //  ////////////////////////////////////////////////////////////////  ////////////////////////////////  ////////////////////////////////  ////////////////////////////////  /////////////////////////////
  const inCrease = id => {
    let newCount = count.map(elem => {
      if (elem.id === id && elem.count > 1) {
        return {
          ...elem,
          count: elem.count - 1,
        };
      }
      return elem;
    });
    setCount(newCount);
  };

  let totalPrice = 0;
  //  ////////////////////////////////////////////////////////////////  ////////////////////////////////  ////////////////////////////////  ////////////////////////////////  //////////////////////////////
  const navigat = useNavigate();
  return (
    <Box className="color">
      <Container maxW={"80%"} w={"100%"}>
        {count?.map(products => {
          let localPrice = products.current_price * products.count;
          totalPrice += localPrice;
          return (
            <Box
              w={"100%"}
              key={products.id}
              display={"flex"}
              flexDirection={"column"}
              gap={"10px"}
              pt={"75px"}
            >
              <Grid
                bg={"#fff"}
                w={"100%"}
                p={"10px"}
                gap={"10px"}
                templateColumns={{
                  base: "auto ",
                  lg: "auto auto auto",
                  md: "auto auto",
                }}
                key={products.id}
                alignItems={"center"}
              >
                <GridItem>
                  <Box
                    display={"flex"}
                    justifyContent={{ base: "center", sm: "auto" }}
                  >
                    <Image
                      src={products.img}
                      w={"160px"}
                      h={"160px"}
                      objectFit={"cover"}
                      alt="rasm"
                    />
                  </Box>
                </GridItem>
                <GridItem className="text">
                  <Box>
                    <Text fontSize={"14px"} color={"#DD1470"} fontWeight={500}>
                      {products.current_price}
                    </Text>
                    <Text
                      _hover={{ color: "#DD1470" }}
                      transition={"all 1s"}
                      fontSize={{ base: "8px", "2xl": "8.1px" }}
                      cursor={"pointer"}
                    >
                      {products.title_name}
                    </Text>
                    <Text
                      fontSize={"10px"}
                      _hover={{ color: "#DD1470" }}
                      transition={"all 1s"}
                      cursor={"pointer"}
                    >
                      Бренд: {products.category_name}
                    </Text>
                  </Box>{" "}
                </GridItem>
                <GridItem>
                  <Box
                    display={"flex"}
                    justifyContent={"center"}
                    align={"center"}
                    gap={"10px"}
                  >
                    <Box _hover={{ color: "#DD1470" }} transition={"all 1s"}>
                      <FaRegTrashAlt
                        cursor={"pointer"}
                        size={35}
                        onClick={() => remove(products.id)}
                      />
                    </Box>
                    <Flex gap={2}>
                      <Button onClick={() => inCrease(products.id)}>-</Button>
                      <Heading>{products.count}</Heading>
                      <Button onClick={() => decCrease(products.id)}>+</Button>
                    </Flex>
                  </Box>
                </GridItem>
              </Grid>
            </Box>
          );
        })}

        <Box
          className="text-price"
          mt={"10px"}
          boxShadow={" 0px 0px 37px 0px rgba(210, 220, 230, 1)"}
          w={{ base: "100%", xl: "25.2%" }}
          p={"15px"}
        >
          {count.map(product => {
            return (
              <Box cursor={"pointer"} key={product.id}>
                <Text fontSize={{ base: "10px", md: "14px" }} color={"#dd1470"}>
                  {product.title_name}
                </Text>
                <Flex mb={"10px"} cursor={"pointer"} gap={"10px"}>
                  <Box>
                    <Text>Цена</Text>
                  </Box>
                  <Box>
                    <Text>{product.current_price} sum</Text>
                  </Box>
                </Flex>
              </Box>
            );
          })}
          <Box className="text-price">
            <Text fontSize={"12px"} color={"black"} cursor={"pointer"}>
              Ваш платеж: : {totalPrice} сум x 1 раз
            </Text>
            <Flex>
              <Heading cursor={"pointer"} size={"16px"}>
                = {totalPrice} som
              </Heading>
            </Flex>
          </Box>
        </Box>
        <Box pt={"80px"} _hover={{ color: "#DD1470" }} transition={"all 1s"}>
          <Link to={"/"}>
            <FaArrowLeft size={40} />
          </Link>
        </Box>
      </Container>
      <Foreveryone />
    </Box>
  );
};

export default Korzinka;
