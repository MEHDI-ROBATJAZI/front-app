import {ChakraProvider} from '@chakra-ui/react'
import { Provider } from 'react-redux'
import { useStore } from '../store'
import {RtlProvider} from '../RTLprovider'
import "../styles/index.css"
import "../styles/admin-page.css"


export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)

  return (
    <Provider store={store}>
      <ChakraProvider>
        <RtlProvider>
          <Component {...pageProps} />
        </RtlProvider>
      </ChakraProvider>
    </Provider>
  )
}