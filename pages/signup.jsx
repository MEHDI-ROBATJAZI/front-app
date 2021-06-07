import React, { useState, useRef, useEffect } from "react";
import Head from "next/head";
import Header from "../app/Components/header";
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
  Flex,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import axios from "axios";
import { TextAnimation1 , ImageAnimation} from "../app/utils/MyAnimation";
import {useForm} from "react-hook-form"
import {UserInformation} from '../app/Actions/actions'
import { useDispatch } from "react-redux";
import {useRouter} from "next/router"


const ErrorStyles = {
  color:"#ff6a6a",
  backgroundColor:"black",
  fontSize:"14px",
  fontFamily:"Architects Daughter",
  letterSpacing:"1px",
}



const Signup = () => {
  const {register, setValue ,handleSubmit , formState:{errors}} = useForm()
  const SubmitButtonElement = useRef(null);
  
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  
  const MaleRadioButton = useRef(null)
  const FemaleRadioButton = useRef(null)
  
  const dispatch = useDispatch()
  const router = useRouter()
  // submit form function
  const SUBMIT = async (data)=> {
    if(gender===""){
      alert("please choose your gender")
      return
    }
    data.gender = gender
    
    try{
      const response =  await axios.post("http://localhost:5000/signup", data)
      if(response.status===200){

        dispatch(UserInformation(data))
        // window.history.back()
        router.push("/")
        // history.pushState(null, null, '/');
        // console.log(window.history)
      }
    }catch(error){
      console.log(error);
      alert("your request failed , something went wrong and Please Try Again ")
    }finally{
      // Errasing All Inputs Into Signup Page
      setValue("firstName","",{shouldValidate:false})
      setValue("lastName","",{shouldValidate:false})
      setValue("email","",{shouldValidate:false})
      setValue("passwd","",{shouldValidate:false})
      setGender('')
      MaleRadioButton.current.removeAttribute("checked")
      FemaleRadioButton.current.removeAttribute("checked")
    }
  };

  // Animation
  const Title = useRef(null);
  const ImageParentElement = useRef(null)

  useEffect(() => {
    TextAnimation1(Title, 50);
    ImageAnimation(ImageParentElement,500)
  }, []);
  

  // set gender user in radio button
  const [gender,setGender] = useState("")

  
  return (
    <Box fontFamily="Titillium Web" bg="gray.100" h="100vh">
      <Head>
        <title>Register Page</title>
      </Head>
      <Header />

      <Container
        bgGradient="linear(to-l, #af5eff, #ff57ab)"
        maxW="960px"
        mt={"60px"}
        minHeight="480px"
        border={"1px solid yellow"}
        overflow="hidden"
      >
        <Heading
          textAlign="center"
          mt={5}
          fontFamily="Dancing Script"
          ref={Title}
        >
          Register Page
        </Heading>

        <SimpleGrid columns={2} spacing={1}>
          <Box
              className="ImageBox"
              ref={ImageParentElement}
              >
            <Image
              src="/assets/signup-undraw.svg"
              boxSize="350px"
              alt="signup/undraw"
            />
          </Box>
          <Stack spacing={3} mt={"20px"} p={4}>
            <Flex>
              <Input
                variant="flushed"
                placeholder="name"
                {...register("firstName",{required:true , minLength:2 , maxLength:20})}
              />
              <Input
                variant="flushed"
                placeholder="family"
                {...register("lastName",{required:true , minLength:2 , maxLength:20})}
              />
            </Flex>
            {errors.firstName && <Box style={ErrorStyles}>please write firstname between 2 and 20 charachters</Box>}
            {errors.lastName && <Box style={ErrorStyles}>please write lastname between 2 and 20 charachters</Box>}
            <Input
              style={{ textIndent: "8px", letterSpacing: "2px" }}
              size="md"
              mb={5}
              placeholder="email"
              focusBorderColor="blue.300"
              {...register("email",{required:true,pattern:/^(.+)@(.+)$/i})}
            />
            {errors.email && <Box style={ErrorStyles}>please write a correct email , email is required </Box>}
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Enter password"
                {...register("passwd" , {required:true,minLength:6,maxLength:30})}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
            {errors.passwd && <Box style={ErrorStyles}>your password length should be between 6 and 30 characters and password is required</Box>}

            <RadioGroup value={gender} onChange={setGender}>
              <Stack spacing={5} direction="row" >

                <Radio
                  colorScheme="red"
                  value="male"
                  ref={MaleRadioButton}
                >
                  male
                </Radio>
                <Radio
                  value="female"
                  colorScheme="green"
                  ref={FemaleRadioButton}

                >
                  female
                </Radio>
              </Stack>
            </RadioGroup>

            <Button
              ref={SubmitButtonElement}
              size="lg"
              bg="#deda3c"
              leftIcon={<AddIcon w={4} />}
              onClick={handleSubmit(SUBMIT)}
            >
              Signup now
            </Button>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};



export default Signup
