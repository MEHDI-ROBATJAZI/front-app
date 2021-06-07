import React from 'react'
import { Box, Tooltip, Heading, UnorderedList, ListItem, Badge } from '@chakra-ui/react'
import { FiChevronsDown } from "react-icons/fi";

const Section2 = () => {
  return (
    <Box
      className="section"
      bgGradient="radial(white,#a1a1a1)"
    // position="relative"
    >
      <Box
      // id="skills_container"
      // position="absolute"
      // left="300px"
      // top="120px"
      >
        <Tooltip
          label="These items are honest please trust me"
          aria-label="A tooltip"
        >
          <Heading
            size="lg"
            border="1px solid yellow"
            className="section_box"
          >
            SKILLS_💪
          </Heading>
        </Tooltip>
        <UnorderedList
          id="skills_list"
          w={{ base: "300px", sm: "430px", md: "700px", lg: "1000px" }}
          fontSize={{ base: "1em", sm: "1.5em", md: "1.7em", lg: "2em" }}
        >
          <ListItem>
            javascirpt / es6 and higher /nodejs /react / redux{" "}
            <Badge colorScheme="teal">fluent</Badge>
          </ListItem>
          <ListItem>
            design : bootstrap / chakra-ui / semantic-ui
            <Badge colorScheme="green">good</Badge>
          </ListItem>
          <ListItem>
            data-base : for now only mongodb/mongoose
            <Badge colorScheme="purple">i have worked before</Badge>
          </ListItem>
          <ListItem>
            regular expression <Badge colorScheme="cyan">not bad</Badge>
          </ListItem>
          <ListItem>
            git / github <Badge colorScheme="green">good</Badge>
          </ListItem>
          <ListItem>
            type script<Badge colorScheme="cyan">medium level</Badge>
          </ListItem>
          <ListItem>
            debugging capability<Badge colorScheme="green">good</Badge>
          </ListItem>
          <ListItem>
            understanding english
            <Badge colorScheme="cyan">
              {" "}
              medium level and i working on it
            </Badge>
          </ListItem>
          <ListItem>
            linux . strapi . and etc ...
            <Badge colorScheme="red"> i working on it</Badge>
          </ListItem>
        </UnorderedList>
      </Box>
      <Box
        className="iconChevronDown"
        onClick={() => window.scrollTo({ top: 1640, behavior: 'smooth' })}
      >
        <FiChevronsDown fontSize="42px" />
      </Box>
    </Box>
  )
}

export default Section2
