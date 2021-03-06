import React from 'react'
import { Box ,Text, Heading, Image } from '@chakra-ui/react'
import { FiChevronsDown } from "react-icons/fi";
import calculateSectionsHeight from "../../utils/calculateSectionsHeight"

const Section1 = () => {
  return (
    <Box className="section gradiant" /*  bg="#a2ff91"  */ position="relative">
        <Image
          src="/assets/me.png"
          width="350px"
          position="absolute"
          bottom="0"
          right="0"
          opacity={{sm:".1" , md:".5" , lg:"1"}}
        />
        <Box
          id="welcome_box"
        >
          <Heading
            className="welcome_heading"
            fontSize={{ base: "2em", sm: "3em", md: "4em", lg: "5em" }}
          >
            Mahdi Robatjazi
          </Heading>
          <Heading
            className="welcome_heading"
            fontSize={{ base: "2em", sm: "3em", md: "4em", lg: "5em" }}
          >
            Software Engineer
          </Heading>
          <Heading
            className="welcome_heading"
            fontSize={{ base: "2em", sm: "3em", md: "4em", lg: "5em" }}
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
          // onClick={() => window.scrollTo({top:800 ,behavior:'smooth'} )}
          onClick={()=>calculateSectionsHeight(1)}
        >
          <FiChevronsDown fontSize="42px" />
        </Box>
      </Box>
  )
}

export default Section1
