import {ChakraProvider,extendTheme} from '@chakra-ui/react'
import { createBreakpoints } from "@chakra-ui/theme-tools"
import { Provider } from 'react-redux'
import { useStore } from '../store'
import "../styles/index.css"
import "../styles/admin-page.css"
import "../styles/sliderStyle.css"
import "../styles/gradiant.css"

import "../app/Components/tasks/taskList.css"
// import "../public/fonts/B_Nazanin.ttf"

// 2. Update the breakpoints as key-value pairs
const breakpoints = createBreakpoints({
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
})

const theme = extendTheme({createBreakpoints})


export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)
  
  
  return (
    <Provider store={store}>
      <ChakraProvider theme = {theme} >
        
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  )
}