import {
  Box,
  Tooltip,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  OrderedList,
  ListItem,
  Image,
} from "@chakra-ui/react";
import React from "react";
import { FiChevronsDown } from "react-icons/fi";
import { Zoom } from "react-slideshow-image";
const ImageLinks = [
  "https://i.ibb.co/G9mRSjh/1-min.jpg",
  "https://i.ibb.co/rfM76Nb/4-min.jpg",
  "https://i.ibb.co/qF91mdf/2-min.jpg",
  "https://i.ibb.co/D8tfP8S/3-min.jpg",
];

const zoomInProperties = {
  indicators: true,
  scale: 1.4,
};

import calculateSectionsHeight from "../../utils/calculateSectionsHeight";

const Section3 = () => {
  return (
    <Box
      style={{overflow:"hidden"}}
      className="section"
      position="relative"
      bgGradient="linear(to-tr,#fabb3e,#ff413b)"
    >
      {/* <RtlProvider> */}
      <Box id="personality_container" lang="ar" dir="rtl">
        <Tooltip label=" 😃 این بخش و فارسی نوشتم" aria-label="A tooltip">
          <Heading
            size="xl"
            border="1px solid yellow"
            className="section_box"
            padding="25px"
          >
            درباره من | سوالات | گالری تصاویر
          </Heading>
        </Tooltip>
      </Box>
      <Box style={{ zIndex: "500" }}>
        <Accordion w={"700px"} m="auto">
          <AccordionItem lang="ar" dir="rtl">
            <h2>
              <AccordionButton>
                <Heading as="h4" size="md">
                  درباره من
                </Heading>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} m="20px 100px">
              من مهدی رباط جزی اصالتا اهل _ خراسان رضوری سبزوار _ بزرگ شده قم و
              ساکن تهران عاشق برنامه نویسی تحت جاوااسکریپت و مشتاق یادگیری بیشتر
              به دنبال تلاش و همکاری با یه سری دوست جدید و اینکه باید اینجا خودم
              رو معرفی کنم منظم متاهد به کار با پشتکار و اهل انجام کارهای جدید و
              سازگاری راحت با محیط اطراف ترجیح میدم که با یک تیم خوب داخل شرکت
              کار کنم تا اینکه خودم تنها بشینم داخل خونه و کدبزنم تو این مدت که
              درحال یادگیری کدنویسی بودم به خوبی متوجه این مسئله شدم و هدفم رو
              برای این رویکرد گذاشتم
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem lang="ar" dir="rtl">
            <>
              <h2>
                <AccordionButton>
                  <Heading as="h4" size="md">
                    اینو با چی درست کردم
                  </Heading>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} m="20px 200px">
                <OrderedList>
                  <ListItem>ری اکت</ListItem>
                  <ListItem>نکست</ListItem>
                  <ListItem>ریداکس</ListItem>
                  <ListItem>چاکرا یو آی</ListItem>
                </OrderedList>
              </AccordionPanel>
            </>
          </AccordionItem>
          <AccordionItem>
            <>
              <h2>
                <AccordionButton lang="ar" dir="rtl">
                  <Heading as="h4" size="md">
                    گالری تصاویر 
                  </Heading>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} m="20px 200px">
                {/* carousel */}

                <Box
                  className="slide-container"
                  style={{ width: "250px", margin: "auto" }}
                >
                  <Zoom {...zoomInProperties} easing="ease">
                    {ImageLinks.map((item, index) => (
                      <Box
                        key={index}
                        style={{ width: "100%" }}
                        className="each-child"
                      >
                        <Image
                          style={{ objectFit: "cover", width: "100%" }}
                          src={item}
                        />
                      </Box>
                    ))}
                  </Zoom>
                </Box>
              </AccordionPanel>
            </>
          </AccordionItem>
        </Accordion>
      </Box>
      {/* </RtlProvider> */}
      <Box className="blob" id="blob1">
        <svg
          className="svgBlob"
          viewBox="0 0 200 200"
          width="160px"
          // height="1054px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#07e000"
            d="M61.6,-46.8C75,-32.4,77.5,-7.1,71.5,15.1C65.4,37.3,50.9,56.4,33.9,60.9C17,65.4,-2.4,55.3,-18.3,45C-34.3,34.7,-46.7,24.1,-51.9,9.5C-57.2,-5.1,-55.2,-23.8,-45.3,-37.3C-35.5,-50.9,-17.7,-59.4,3.2,-61.9C24.2,-64.5,48.3,-61.1,61.6,-46.8Z"
            transform="translate(100 100)"
          />
        </svg>
      </Box>
      <Box className="blob" id="blob2">
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          width="200px"
          className="svgBlob"
        >
          <path
            fill="#3884ff"
            d="M45.4,-60.6C57.1,-54,63.6,-38.4,67.5,-22.8C71.3,-7.2,72.6,8.4,67.6,21.3C62.5,34.2,51.1,44.5,38.8,52.4C26.5,60.3,13.2,65.9,-0.5,66.6C-14.3,67.4,-28.7,63.3,-36.7,54C-44.7,44.6,-46.4,30.1,-46.9,17.8C-47.4,5.4,-46.7,-4.7,-46.3,-17.9C-46,-31.1,-46,-47.2,-38.4,-55.2C-30.7,-63.1,-15.3,-62.8,0.8,-63.8C16.9,-64.9,33.7,-67.3,45.4,-60.6Z"
            transform="translate(100 100)"
          />
        </svg>
      </Box>
      <Box className="blob" id="blob3">
        <svg
          className="svgBlob"
          viewBox="0 0 200 200"
          width="300px"
          // height="1054px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#dd03ff"
            d="M64.8,-3.3C64.8,21,32.4,41.9,1.5,41.9C-29.4,41.9,-58.9,21,-58.9,-3.3C-58.9,-27.5,-29.4,-55.1,1.5,-55.1C32.4,-55.1,64.8,-27.5,64.8,-3.3Z"
            transform="translate(100 100)"
          />
        </svg>
      </Box>
      <Box
        className="iconChevronDown"
        onClick={() => calculateSectionsHeight(3)}
      >
        <FiChevronsDown fontSize="42px" />
      </Box>
    </Box>
  );
};

export default Section3;
