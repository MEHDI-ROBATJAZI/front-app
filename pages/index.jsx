import React from "react";
import Head from "next/head";
import Header from "../app/Components/header";
import {
  Badge,
  Box,
  Tooltip,
  Heading,
  ListItem,
  Center,
  Text,
  UnorderedList,
  AccordionPanel,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionIcon,
} from "@chakra-ui/react";
// import {AddIcon , MinusIcon} from '@chakra-ui/icons'
import { FiChevronsDown } from "react-icons/fi";

const Home = () => {
  return (
    <Box bg="gray.100" h="200vh">
      <Head>
        <title>Test Next</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Header />

      <Box className="section" bg="#a2ff91">
        <Box id="welcome_box">
          <Heading
            className="welcome_heading"
            letterSpacing="4px"
            fontFamily="Big Shoulders Display"
            fontSize="6em"
            lineHeight={"120px"}
          >
            Mahdi Robatjazi
          </Heading>
          <Heading
            className="welcome_heading"
            letterSpacing="4px"
            fontFamily="Big Shoulders Display"
            fontSize="6em"
            lineHeight={"120px"}
          >
            Software Engineer
          </Heading>
          <Heading
            className="welcome_heading"
            letterSpacing="4px"
            fontFamily="Big Shoulders Display"
            fontSize="6em"
            lineHeight={"120px"}
          >
            Web Developer
          </Heading>
          <Text className="welcome_footer">JavaScript✌🏽️</Text>
          <Text className="welcome_footer">And nothing else ... 👏</Text>
        </Box>
        <Box className="iconChevronDown">
          <FiChevronsDown fontSize="42px" />
        </Box>
      </Box>

      <Box
        className="section"
        bgGradient="radial(white,#a1a1a1)"
        position="relative"
      >
        <Box id="skills_container">
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
          <UnorderedList id="skills_list">
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
        <Box className="iconChevronDown">
          <FiChevronsDown fontSize="42px" />
        </Box>
      </Box>
      <Box className="section"bgGradient="linear(to-tr,#fabb3e,#ff413b)">
        <Box id="personality_container"  lang="ar" dir="rtl" >
          <Tooltip label=" 😃 این بخش و فارسی نوشتم" aria-label="A tooltip">
            <Heading
              size="lg"
              border="1px solid yellow"
              className="section_box"
            >
              درباره من و سوالات
            </Heading>
          </Tooltip>

          <Accordion w={"770px"} allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box >
                    درباره من
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                من مهدی رباط جزی اصالتا اهل _ خراسان رضوری سبزوار _ بزرگ شده قم و ساکن تهران  
                عاشق برنامه نویسی تحت جاوااسکریپت و مشتاق یادگیری بیشتر به دنبال تلاش و همکاری با یه سری دوست جدید
                اهل تعریف و تمجید از خودم نیستم ولی باید اینجا خودم رو معرفی کنم
                منظم متاهد به کار با پشتکار و اهل انجام کارهای جدید و سازگاری راحت با محیط اطراف
                ترجیح میدم که با یک تیم خوب داخل شرکت کار کنم تا اینکه خودم تنها بشینم داخل خونه و کدبزنم تو این مدت که درحال یادگیری کدنویسی بودم
                به خوبی متوجه این مسئله شدم
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
                <>
                  <h2>
                    <AccordionButton>
                      <Box>
                        Section 2 title
                      </Box>
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </>
            </AccordionItem>
          </Accordion>
        </Box>
        <Box className="iconChevronDown">
          <FiChevronsDown fontSize="42px" />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
