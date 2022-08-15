import '../styles/globals.css'
import '../src/scss/estilos.scss'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'

const colors = {
  blue: {
    900: '#1b262c',
    800: '#0f4c75',
    700: '#bbe1fa',
  },
}

const theme = extendTheme({ colors })

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
