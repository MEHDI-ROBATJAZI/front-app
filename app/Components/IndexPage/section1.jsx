import React from 'react'
import { Box ,Text, Heading, Image } from '@chakra-ui/react'
import { FiChevronsDown } from "react-icons/fi";


const Section1 = () => {
  return (
    <Box className="section" bg="#a2ff91" position="relative">
        <Image
          src="/assets/me.png"
          width="400px"
          position="absolute"
          bottom="0"
          right="0"
        />
        <Box
          id="welcome_box"
          // ref={welcomeElement}
        >
          <Heading
            className="welcome_heading"
            fontFamily="Big Shoulders Display"
            fontSize={{ base: "3em", sm: "4em", md: "5em", lg: "6em" }}
          >
            Mahdi Robatjazi
          </Heading>
          <Heading
            className="welcome_heading"
            fontFamily="Big Shoulders Display"
            fontSize={{ base: "3em", sm: "4em", md: "5em", lg: "6em" }}
          >
            Software Engineer
          </Heading>
          <Heading
            className="welcome_heading"
            fontFamily="Big Shoulders Display"
            fontSize={{ base: "3em", sm: "4em", md: "5em", lg: "6em" }}
          >
            Web Developer
          </Heading>
          <Text
            fontSize={{ base: "1.4em", md: "2.7em", lg: "3em" }}
            className="welcome_footer"
          >
            JavaScript✌🏽️ / React
          </Text>
          <Text
            fontSize={{ base: "1.4em", md: "2.7em", lg: "3em" }}
            className="welcome_footer"
          >
            is my lovely language ... 👏
          </Text>
        </Box>
        <Box
          className="iconChevronDown"
          onClick={() => window.scrollTo({top:840 ,behavior:'smooth'} )}
        >
          <FiChevronsDown fontSize="42px" />
        </Box>
      </Box>
  )
}

export default Section1
