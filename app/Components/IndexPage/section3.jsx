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
  Image
} from "@chakra-ui/react";
import React from "react";
import { FiChevronsDown } from "react-icons/fi";
import RtlProvider from "../../../RTLprovider";
import { Zoom } from "react-slideshow-image";

const ImageLinks =[
  "https://i.ibb.co/G9mRSjh/1-min.jpg",
  "https://i.ibb.co/rfM76Nb/4-min.jpg",
  "https://i.ibb.co/qF91mdf/2-min.jpg",
  "https://i.ibb.co/D8tfP8S/3-min.jpg",
]

const zoomInProperties = {
  indicators: true,
  scale: 1.4
}

const Section3 = () => {

  return (
    <Box className="section" bgGradient="linear(to-tr,#fabb3e,#ff413b)">
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
        <Accordion>
          <AccordionItem lang="ar" dir="rtl">
            <h2>
              <AccordionButton>
                <Heading as="h4" size="md">
                  درباره من
                </Heading>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} m="20px 200px">
              من مهدی رباط جزی اصالتا اهل _ خراسان رضوری سبزوار _ بزرگ شده قم و
              ساکن تهران عاشق برنامه نویسی تحت جاوااسکریپت و مشتاق یادگیری بیشتر
              به دنبال تلاش و همکاری با یه سری دوست جدید اهل تعریف و تمجید از
              خودم نیستم ولی باید اینجا خودم رو معرفی کنم منظم متاهد به کار با
              پشتکار و اهل انجام کارهای جدید و سازگاری راحت با محیط اطراف ترجیح
              میدم که با یک تیم خوب داخل شرکت کار کنم تا اینکه خودم تنها بشینم
              داخل خونه و کدبزنم تو این مدت که درحال یادگیری کدنویسی بودم به
              خوبی متوجه این مسئله شدم و هدفم رو برای این مسئله گذاشتم
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem lang="ar" dir="rtl">
            <>
              <h2>
                <AccordionButton>
                  <Heading as="h4" size="md">
                    اینو با چی درست کردم؟
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
                    تصاویر
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

                    {
                      ImageLinks.map((item,index)=>(
                        <Box key={index} style={{width:"100%"}} className="each-child">
                          <Image style={{ objectFit: "cover", width: "100%" }} src={item} />
                        </Box>
                      ))
                    }

                    {/* <Box className="each-slide">
                      <Image src={imageLinks[0]} />
                    </Box>
                    <Box className="each-slide">
                      <Image src={imageLinks[1]} />
                    </Box>
                    <Box className="each-slide">
                      <Image src={imageLinks[2]} />
                    </Box>
                    <Box className="each-slide">
                      <Image src={imageLinks[3]} />
                    </Box> */}
                  </Zoom>
                </Box>
              </AccordionPanel>
            </>
          </AccordionItem>
        </Accordion>
      </Box>
      {/* </RtlProvider> */}
      <Box id="blob">
          <svg
            viewBox="0 0 200 200"
            width="1054px"
            height="1054px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#07e000"
              d="M61.6,-46.8C75,-32.4,77.5,-7.1,71.5,15.1C65.4,37.3,50.9,56.4,33.9,60.9C17,65.4,-2.4,55.3,-18.3,45C-34.3,34.7,-46.7,24.1,-51.9,9.5C-57.2,-5.1,-55.2,-23.8,-45.3,-37.3C-35.5,-50.9,-17.7,-59.4,3.2,-61.9C24.2,-64.5,48.3,-61.1,61.6,-46.8Z"
              transform="translate(100 100)"
            />
          </svg>
        </Box>
      <Box
        className="iconChevronDown"
        onClick={() => {
          window.scrollTo({top:2220 ,behavior:'smooth'});
          // const mywindow = window.open("","_blank","fullscreen=yes")
          // mywindow.defaultStatus = "my status"
        }}
      >
        <FiChevronsDown fontSize="42px" />
      </Box>
    </Box>
  );
};

export default Section3;
