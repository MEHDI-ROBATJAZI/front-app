import {ChakraProvider,extendTheme} from '@chakra-ui/react'
import { createBreakpoints } from "@chakra-ui/theme-tools"
import { Provider } from 'react-redux'
import { useStore } from '../store'
import {RtlProvider} from '../RTLprovider'
import "../styles/index.css"
import "../styles/admin-page.css"


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
        <RtlProvider>
          <Component {...pageProps} />
        </RtlProvider>
      </ChakraProvider>
    </Provider>
  )
}