import React,{useRef} from 'react'
import {
	Box,
	Image,
	Divider,
	VStack,
}
from "@chakra-ui/react"



const Footer =()=>{

  const instagramImageElement = useRef(null)
  const githubImageElement = useRef(null)
  const telegramImageElement = useRef(null)
  const skypeImageElement = useRef(null)

  const insta_mouse_over =()=>{
    instagramImageElement.current.src = "/instagramLogo2.png"
  }
  const insta_mouse_leave =()=>{
    instagramImageElement.current.src = "/instagramLogo1.png"
  }
  const github_mouse_over =()=>{
    githubImageElement.current.src = "/githubLogo2.png"
  }
  const github_mouse_leave =()=>{
    githubImageElement.current.src = "/githubLogo1.png"
  }
  const telegram_mouse_over=()=>{
    telegramImageElement.current.src = "/telegramLogo2.png"
  }
  const telegram_mouse_leave=()=>{
    telegramImageElement.current.src = "/telegramLogo1.png"
  }
  const skype_mouse_over=()=>{
    skypeImageElement.current.src="/skypeLogo2.png"
  }
  const skype_mouse_leave=()=>{
    skypeImageElement.current.src="/skypeLogo1.png"
  }

	return(
		<Box>
      <Divider />
      <VStack spacing={"14px"}>
        <Box>
    			<Image
            src="/instagramLogo1.png"
            alt="Picture of the my instagram profile"
            width={40}
            height={40}
            ref={instagramImageElement}
            onMouseOver={insta_mouse_over}
            onMouseLeave={insta_mouse_leave}
            onClick={()=>window.location.href = "https://www.instagram.com/mahdi._.robatjazi/"}
          />
        </Box>
        <Box>
          <Image
            src="/githubLogo1.png"
            alt="Picture of the my github profile"
            width={40}
            height={40}
            ref={githubImageElement}
            onMouseOver={github_mouse_over}
            onMouseLeave={github_mouse_leave}
            onClick={()=>window.location.href="https://github.com/MEHDI-ROBATJAZI"}
          />
          <Image
            src="/telegramLogo1.png"
            alt="Picture of the my telegram profile"
            width={40}
            height={40}
            ref={telegramImageElement}
            onMouseOver={telegram_mouse_over}
            onMouseLeave={telegram_mouse_leave}
            onClick={()=> alert("Telegram ID : @Mahdi_Robatjazi")}
          />
          <Image
            src="/skypeLogo1.png"
            alt="Picture of the my skype profile"
            width={40}
            height={40}
            ref={skypeImageElement}
            onMouseOver={skype_mouse_over}
            onMouseLeave={skype_mouse_leave}
            onClick={()=>window.location.href="https://join.skype.com/invite/op1fkBia0ShO"}
          />
        </Box>
      </VStack>
		</Box>
	)		
}


export default Footer