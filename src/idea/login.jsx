import { Box, Container, Flex } from "@chakra-ui/react";
import { SignIn } from "@clerk/clerk-react";
const Login = () => {
  return (
    <Box pt={"70px"}>
      <Container maxW={"80%"} w={"100%"}>
        <Flex justify={"center"}>
          <SignIn />
        </Flex>
      </Container>
    </Box>
  );
};

export default Login;
