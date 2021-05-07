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
  RadioGroup,
  Radio,
  InputRightElement,
  Flex 

} from "@chakra-ui/react";
import {AddIcon} from '@chakra-ui/icons'
import {connect} from 'react-redux'
import {Change_Input_Data} from '../app/Actions/actions.js'
import {useSelector} from "react-redux"
import axios from 'axios'

const Signup = (props) => {

  const [show, setShow] =useState(false)
  const handleClick = () => setShow(!show)
  const formData = useSelector(state=> state.form_data)

  const SUBMIT = async()=>{
    const resp = await axios.post("http://localhost:5000/signup",formData)
  }

  return (
    <Box fontFamily="Titillium Web" bg="gray.100" h="100vh">
      <Head>
        <title>Signup Page</title>
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
          Register Page
        </Heading>
        <SimpleGrid columns={2} spacing={1}>
          <Image src="/signup-undraw.svg" boxSize="350px" alt="signup/undraw" />
          <Stack spacing={3} mt={"60px"}>
            
            <Flex>
             <Input variant="flushed" name="name" placeholder="name" onChange={(e)=>props.ChangeInput(e)} />  
             <Input variant="flushed" name="family" placeholder="family" onChange={(e)=>props.ChangeInput(e)} />  
            </Flex>

            <Input
              style={{ textIndent: "8px", letterSpacing: "2px" }}
              size="md"
              mb={5}
              placeholder="email"
              name="email"
              focusBorderColor="blue.300"
              onChange={(e)=>props.ChangeInput(e)}
            />



            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Enter password"
                name="password"
                onChange={(e)=>props.ChangeInput(e)}

              />  
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>


            <RadioGroup defaultValue="2">
              <Stack spacing={5} direction="row">
                <Radio colorScheme="red" value="male" name="gender" onChange={(e)=>props.ChangeInput(e)}>
                  male
                </Radio>
                <Radio colorScheme="green" value="female" name="gender" onChange={(e)=>props.ChangeInput(e)}>
                  female
                </Radio>
              </Stack>
            </RadioGroup>



            <Button
              size="lg"
              colorScheme={"yellow"}
              leftIcon={<AddIcon w={4} />}
              onClick={SUBMIT}
            >
              Signup now
            </Button>
          </Stack>
        </SimpleGrid>
      </Container>
      <InputUserController />
    </Box>
  );
};




const mapDispatchToProps = dispatch => {
  return {
    ChangeInput:(event)=>{
      let tagname = event.target.name
      let value = event.target.value;
      const form_name="signup"
      dispatch(Change_Input_Data(form_name,tagname,value))
    },
  }
}

export default connect(null , mapDispatchToProps)(Signup);
