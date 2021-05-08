import React,{useState} from "react";
import Head from 'next/head'
import Header from "../app/Components/header";
import InputUserController from '../app/Components/InputUserController'
import {
  Box,
  Container,
  Input,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Button,
  InputGroup,
  InputRightElement,

} from "@chakra-ui/react";
import {ArrowForwardIcon} from '@chakra-ui/icons'
const Signup = () => {


  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)


  return (
    <Box fontFamily="Titillium Web" bg="gray.100" h="100vh">
      <Head>
        <title>Login Page</title>
      </Head>
      <Header />

      <Container
        bgGradient="linear(to-l, #af5eff, #ff57ab)"
        maxW="960px"
        mt={"60px"}
        height="480px"
        border={"1px solid yellow"}
      >
        <Heading textAlign="center" mt={5} fontFamily="Dancing Script">
          Login Page
        </Heading>
        <SimpleGrid columns={2} spacing={1}>
          <Image src="/assets/login-undraw.svg" boxSize="400px" alt="signup/undraw" />
          <Stack spacing={3} mt={"120px"}>
            <Input
              style={{ textIndent: "8px", letterSpacing: "2px" }}
              size="md"
              mb={5}
              placeholder="email"
              focusBorderColor="blue.300"
            />



            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Enter password"
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>




            <Button
              size="lg"
              colorScheme={"yellow"}
              leftIcon={<ArrowForwardIcon w={4} />}
            >
              {/* <box-icon name="rocket"></box-icon> */}
              Login now
            </Button>
          </Stack>
        </SimpleGrid>
      </Container>
      <InputUserController />
    </Box>
  );
};

export default Signup;
