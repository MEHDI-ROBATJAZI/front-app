import React,{useRef,useEffect,useState} from 'react'
import {
	Box,
	Image,
	Divider,
	VStack,
  HStack,
}
from "@chakra-ui/react"

const waveColors = [
  "#ffac6c",
  "#8cff6c",
  "#ff6190",
  "#bd6cff",
  "#6cf0ff",
  "#7363ff"
]

const changeWaveColor = ()=>{
  let index = 0;
  index = Math.floor(Math.random()* (5-0+1))+0
  console.log(index)
  return waveColors[index]
}

const Footer =()=>{
const [waveColor,setWaveColor] = useState("#ffff61")

useEffect(()=>{
  setInterval(()=>{
    setWaveColor(changeWaveColor)
  },5000)

},[])

  const instagramImageElement = useRef(null)
  const githubImageElement = useRef(null)
  const telegramImageElement = useRef(null)
  const skypeImageElement = useRef(null)

  const insta_mouse_over =()=>{
    instagramImageElement.current.src = "/assets/instagramLogo2.png"
  }
  const insta_mouse_leave =()=>{
    instagramImageElement.current.src = "/assets/instagramLogo1.png"
  }
  const github_mouse_over =()=>{
    githubImageElement.current.src = "/assets/githubLogo2.png"
  }
  const github_mouse_leave =()=>{
    githubImageElement.current.src = "/assets/githubLogo1.png"
  }
  const telegram_mouse_over=()=>{
    telegramImageElement.current.src = "/assets/telegramLogo2.png"
  }
  const telegram_mouse_leave=()=>{
    telegramImageElement.current.src = "/assets/telegramLogo1.png"
  }
  const skype_mouse_over=()=>{
    skypeImageElement.current.src="/assets/skypeLogo2.png"
  }
  const skype_mouse_leave=()=>{
    skypeImageElement.current.src="/assets/skypeLogo1.png"
  }

	return(
		<Box id="footer" className="gradiant2" pt={5}>
      
      <VStack spacing={"14px"}>
    			<Image
            src="/assets/instagramLogo1.png"
            alt="Picture of the my instagram profile"
            width={40}
            height={40}
            ref={instagramImageElement}
            onMouseOver={insta_mouse_over}
            onMouseLeave={insta_mouse_leave}
            onClick={()=>window.open("https://www.instagram.com/mahdi._.robatjazi/","_blank")}
            className="footerImage"
          />
          <HStack spacing="10rem">
            <Image
              src="/assets/githubLogo1.png"
              alt="Picture of the my github profile"
              width={40}
              height={40}
              ref={githubImageElement}
              onMouseOver={github_mouse_over}
              onMouseLeave={github_mouse_leave}
              onClick={()=>window.open("https://github.com/MEHDI-ROBATJAZI" , "_blank")}
              className="footerImage"
            />
            <Image
              src="/assets/telegramLogo1.png"
              alt="Picture of the my telegram profile"
              width={40}
              height={40}
              ref={telegramImageElement}
              onMouseOver={telegram_mouse_over}
              onMouseLeave={telegram_mouse_leave}
              onClick={()=> alert("Telegram ID : @Mahdi_Robatjazi")}
              className="footerImage"
            />
          </HStack>
          <Image
            src="/assets/skypeLogo1.png"
            alt="Picture of the my skype profile"
            width={40}
            height={40}
            ref={skypeImageElement}
            onMouseOver={skype_mouse_over}
            onMouseLeave={skype_mouse_leave}
            onClick={()=>window.open("https://join.skype.com/invite/op1fkBia0ShO" , "_blank")}
            className="footerImage"
          />
      </VStack>

      <Image 
        src="/assets/top-arrow.webp"
        alt="go up"
        width={[10,20,40]}
        onClick={()=> window.scrollTo({top:0 ,behavior:'smooth'})}
        position="absolute"
        right={[90,50,30]}
        bottom="70px"
        zIndex="1000"
      />
      <svg id="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path 
        fill={
          waveColor
        } 
        fillOpacity="1" 
        d="M0,96L30,85.3C60,75,120,53,180,69.3C240,85,300,139,360,176C420,213,480,235,540,218.7C600,203,660,149,720,133.3C780,117,840,139,900,170.7C960,203,1020,245,1080,234.7C1140,224,1200,160,1260,149.3C1320,139,1380,181,1410,202.7L1440,224L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
      </svg>
		</Box>
	)		
}


export default Footer