import React from "react";
import Head from "next/head";
import Header from "../app/Components/header";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Badge,
  Box,
  Divider,
  Heading,
  ListItem,
  Text,
  Tooltip,
  UnorderedList,
  Image
} from "@chakra-ui/react";
import Footer from "../app/Components/footer"
import { FiChevronsDown } from "react-icons/fi";


const Home = () => {
  return (
    <Box bg="gray.100">
      <Head>
        <title>Hello i'm mahdi robatjazi</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Header />

      <Box className="section" bg="#a2ff91" position="relative">
        {/* <Image src="favicon.ico" width="400px" position="absolute" bottom="0" left="0" /> */}
        <Box id="welcome_box">
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
            JavaScript✌🏽️
          </Text>
          <Text
            fontSize={{ base: "1.4em", md: "2.7em", lg: "3em" }}
            className="welcome_footer"
          >
            And nothing more ... 👏
          </Text>
        </Box>
        <Box
          className="iconChevronDown"
          onClick={() => window.scrollTo(0, 600)}
        >
          <FiChevronsDown fontSize="42px" />
        </Box>
      </Box>
      {/* ////////////////////////////// ////////////////////*/}
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
          onClick={() => window.scrollTo(0,1200)}
        >
          <FiChevronsDown fontSize="42px" />
        </Box>
      </Box>

      {/* //////////////////////////////////////////////// */}
      <Box className="section" bgGradient="linear(to-tr,#fabb3e,#ff413b)">
        <Box id="personality_container" lang="ar" dir="rtl">
          <Tooltip label=" 😃 این بخش و فارسی نوشتم" aria-label="A tooltip">
            <Heading
              size="lg"
              border="1px solid yellow"
              className="section_box"
            >
              درباره من و سوالات
            </Heading>
          </Tooltip>

          <Accordion /*w={"770px"}*/ allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box>درباره من</Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                من مهدی رباط جزی اصالتا اهل _ خراسان رضوری سبزوار _ بزرگ شده قم
                و ساکن تهران عاشق برنامه نویسی تحت جاوااسکریپت و مشتاق یادگیری
                بیشتر به دنبال تلاش و همکاری با یه سری دوست جدید اهل تعریف و
                تمجید از خودم نیستم ولی باید اینجا خودم رو معرفی کنم منظم متاهد
                به کار با پشتکار و اهل انجام کارهای جدید و سازگاری راحت با محیط
                اطراف ترجیح میدم که با یک تیم خوب داخل شرکت کار کنم تا اینکه
                خودم تنها بشینم داخل خونه و کدبزنم تو این مدت که درحال یادگیری
                کدنویسی بودم به خوبی متوجه این مسئله شدم
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <>
                <h2>
                  <AccordionButton>
                    <Box>Section 2 title</Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </>
            </AccordionItem>
          </Accordion>
        </Box>
        <Box
          className="iconChevronDown"
          onClick={() => window.scrollTo(0, 1850)}
        >
          <FiChevronsDown fontSize="42px" />
        </Box>
      </Box>

      <Footer />
    </Box>
  );
};

export default Home;
