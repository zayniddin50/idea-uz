import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { BaskentContext } from "../context/BaskentContext";
import { MadalContext } from "../context/MadalContext";
import Madal from "../context/Madal";
import { FaArrowLeft } from "react-icons/fa";
import CardCorusel from "../corusel/Corusel2";
import Atribut from "./Atribut";
import Foreveryone from "../components/Foreveryone";

const TexnikDomPage = () => {
  const { addToStorage } = useContext(BaskentContext);
  const { SetOpen } = useContext(MadalContext);
  const addToBaskent = product => {
    addToStorage(product);
  };
  const params = useParams();
  console.log(params);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(
        ` https://api.idea.uz/api/v2/products?category_id=25&quantity=12&order_by=created_at&order_direction=desc`
      )
      .then(res => setProducts(res.data.data));
  }, [params.id]);
  return (
    <Box>
      <Container maxW={"80%"} w={"100%"}>
        <Box pt={"80px"} _hover={{ color: "#DD1470" }} transition={"all 1s"}>
          <Link to={"/"}>
            <FaArrowLeft size={40} />
          </Link>
        </Box>
        <Grid pt={"70px"}>
          {products?.map(product => {
            if (Number(params.id) == product.id) {
              return (
                <Grid
                  gap={"15px"}
                  w={"100%"}
                  ml={"-15px"}
                  maxW={"100%"}
                  templateColumns={{ base: "auto ", xl: " auto auto" }}
                  key={product.id}
                  justifyContent={{ base: "center", xl: "space-between" }}
                >
                  <GridItem
                    w={"100%"}
                    minW={"100%"}
                    boxShadow={" 0px 0px 37px 0px rgba(210, 220, 230, 1)"}
                    p={"10px"}
                  >
                    <Flex
                      w={"100%"}
                      justifyContent={"space-between"}
                      align={"center"}
                    >
                      <Box w={"100%"}>
                        <Box
                          display={"flex"}
                          justifyContent={"center"}
                        >
                          <Heading fontSize={"15px"}>
                            {product.title_name}
                          </Heading>
                        </Box>
                        <Box>
                          <CardCorusel gallery={product.gallery} />
                        </Box>
                      </Box>
                      <Box
                        display={{ base: "none", "2xl": "block" }}
                        fontSize={{ base: "8px", xl: "15px" }}
                      >
                        <Flex>
                          <Atribut />
                        </Flex>
                      </Box>
                    </Flex>
                  </GridItem>
                  <Box>
                    <Flex>
                      <Box
                        w={"320px"}
                        h={"233px"}
                        boxShadow={" 0px 0px 37px 0px rgba(210, 220, 230, 1)"}
                      >
                        <Box p={"14px"}>
                          <Box
                            display={"flex"}
                            flexDirection={"column"}
                            gap={"10px"}
                          >
                            <Text fontWeight={700} color={"black"}>
                              Цена товара
                            </Text>
                            <Heading color={"#DD1470"}>
                              {product.current_price.toLocaleString("en-US")}{" "}
                              So'm
                            </Heading>
                            <Button
                              onClick={() => addToBaskent(product)}
                              border={"1px solid #DD1470"}
                              w={"288px"}
                              h={"46px"}
                              color={"#DD1470"}
                              _hover={{ color: "white", bg: "#DD1470" }}
                              transition={"all 1s"}
                            >
                              Добавить в корзину
                            </Button>
                            <Button
                              onClick={() => SetOpen(product)}
                              border={"1px solid #DD1470"}
                              w={"288px"}
                              h={"46px"}
                              color={"#DD1470"}
                              _hover={{ color: "white", bg: "#DD1470" }}
                              transition={"all 1s"}
                            >
                              Купить сразу
                            </Button>
                          </Box>
                        </Box>
                      </Box>
                    </Flex>
                  </Box>
                </Grid>
              );
            }
          })}
        </Grid>
        <Madal />
      </Container>
      <Foreveryone />
    </Box>
  );
};

export default TexnikDomPage;
