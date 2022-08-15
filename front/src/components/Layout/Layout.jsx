import Head from 'next/head'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import { Box, ChakraProvider } from '@chakra-ui/react'

const Layout = ({ pageTitle, children }) => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ChakraProvider>
        <Header></Header>
        <main>{children}</main>
        <Footer></Footer>
      </ChakraProvider>
    </>
  )
}

export default Layout
