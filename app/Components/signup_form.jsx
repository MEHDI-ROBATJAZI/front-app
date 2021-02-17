import React from 'react'
import { AddIcon } from "@chakra-ui/icons";
// import InputUserController from "./InputUserController";
import {
  Box,
  Container,
  // FormControll,
  // Input,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Flex,
  Button,
  RadioGroup,
  Radio,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";


import { Field,Form, reduxForm } from 'redux-form'
import {renderField} from '../utils/form_config'


// Signup component
const MyForm = (props) => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const { handleSubmit } = props;

  return (
    <Box fontFamily="Titillium Web" bg="gray.100" h="100vh">

      <Container
        bgGradient="linear(to-l, #af5eff, #ff57ab)"
        maxW="960px"
        mt={"60px"}
        height="480px"
        border={"1px solid yellow"}
      >
        <Heading textAlign="center" mt={5} fontFamily="Dancing Script">
          Register Page
        </Heading>
        <SimpleGrid columns={2} spacing={1}>
          <Image src="/signup-undraw.svg" boxSize="400px" alt="signup/undraw" />
          <Form onSubmit={handleSubmit}>
          <Stack spacing={3} mt={"80px"}>
            <Flex>
              <Field
                type="text"
                name="name"
                component={renderField}
                style={{ textIndent: "8px", letterSpacing: "2px" }}
                variant="flushed"
                size="md"
                mb={5}
                placeholder="name"
                focusBorderColor="lime"
              />
              <Field
                type="text"
                name="family"
                component={renderField}
                style={{ textIndent: "8px", letterSpacing: "2px" }}
                variant="flushed"
                size="md"
                mb={5}
                placeholder="family"
                focusBorderColor="lime"
              />
            </Flex>
            <Field
              type="email"
              name="email"
              component={renderField}
              style={{ textIndent:"8px", letterSpacing:"2px"}}
              size="md"
              mb={5}
              placeholder="email"
              focusBorderColor="blue.300"
            />

            {/* <InputGroup size="md">
              <Field
                component="Input"
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Enter password"
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup> */}

            {/* <RadioGroup defaultValue="2">
              <Stack spacing={5} direction="row">
                <Radio colorScheme="blue" value="1">
                  male
                </Radio>
                <Radio colorScheme="red" value="2">
                  female
                </Radio>
              </Stack>
            </RadioGroup> */}

            <button
              type="submit"
              size="lg"
              colorScheme={"yellow"}
              leftIcon={<AddIcon w={4} />}
            >
              Join
            </button>
          </Stack>
          </Form>
        </SimpleGrid>
      </Container>
      {/* <InputUserController /> */}
    </Box>
  );
};


const Signup = reduxForm({
  form:"signup"
})(MyForm)
export default Signup;
