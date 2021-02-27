import React, { useState, useEffect } from "react";
import Header from "../app/Components/header";
import {
  Box,
  Container,
  HStack,
  Heading,
  Divider,
  Button,
} from "@chakra-ui/react";
import Image from "next/image";
import { EditIcon } from "@chakra-ui/icons";

export default function Profile() {
  const [state, setState] = useState({
    name: "",
    family: "",
    email: "",
    gender: "",
  });

  const baseURL = "http://localhost:5000/";
  const getData = () => {
    fetch(baseURL)
      .then((res) => res.json())
      .then((resp) => {
        // console.log(resp.name);
        setState((prevState) => ({
          ...prevState,
          name: resp.name,
          family: resp.family,
          email: resp.email,
          gender: resp.gender,
        }));
      });
  };

  return (
    <Box>
      <Header />
      <Button 
        colorScheme="teal"
        pos="absolute"
        top="78px"
        right="180px"
        w="960px"
        onClick={getData}

      >
        get data
      </Button>
      <Container bg="gray.100" mt={"80px"} maxW={"960px"} h="60vh">
        <HStack h="60vh" spacing="120px">
          <Image
            mt="20px"
            src="/user-icon.png"
            alt="Picture of the author"
            width="100px"
            height="100px"
          />

          {/* <Divider /> */}

          <Box>
            <Heading m="10px 0px">{state.name + " " + state.family}</Heading>
            <Heading m="10px 0px">{state.email}</Heading>
            <Heading m="10px 0px">{state.gender}</Heading>
          </Box>

          <EditIcon fontSize="3rem" />
        </HStack>
      </Container>
    </Box>
  );
}
