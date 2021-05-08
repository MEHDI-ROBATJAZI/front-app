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
  Image,
} from "@chakra-ui/react";
import Footer from "../app/Components/footer";
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
        <Image
          src="/assets/me.png"
          width="400px"
          position="absolute"
          bottom="0"
          left="0"
        />
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
          onClick={() => window.scrollTo(0, 840)}
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
          onClick={() => window.scrollTo(0, 1640)}
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

        </Box>
          <Box style={{zIndex:"500"}}>
          <Accordion  lang="ar" dir="rtl"allowMultiple>
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
                    <Box>اینو با چی درست کردم؟</Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa eveniet libero sapiente vitae, necessitatibus adipisci aperiam distinctio corrupti ullam debitis itaque. Expedita voluptates necessitatibus ex, distinctio repellat debitis quam vero.
                </AccordionPanel>
              </>
            </AccordionItem>
          </Accordion>
          </Box>
          <svg viewBox="0 0 200 200" id="blob" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#fbaa3e"
              d="M61.6,-46.8C75,-32.4,77.5,-7.1,71.5,15.1C65.4,37.3,50.9,56.4,33.9,60.9C17,65.4,-2.4,55.3,-18.3,45C-34.3,34.7,-46.7,24.1,-51.9,9.5C-57.2,-5.1,-55.2,-23.8,-45.3,-37.3C-35.5,-50.9,-17.7,-59.4,3.2,-61.9C24.2,-64.5,48.3,-61.1,61.6,-46.8Z"
              transform="translate(100 100)"
            />
          </svg>
        <Box 
          className="iconChevronDown"
          onClick={() =>{
            
            // window.scrollTo(0, 2220)
            
            const mywindow = window.open("","_blank","fullscreen=yes")
            mywindow.defaultStatus = "my status"
          }
          }
        >
          <FiChevronsDown fontSize="42px" />
        </Box>
      </Box>

      <Footer />
    </Box>
  );
};

export default Home;
