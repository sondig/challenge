import { Box, Text, Flex, Modal } from '@chakra-ui/react'
import Link from 'next/link'
import ModalMedia from '../../ModalMedia'

const Header = () => {
  return (
    <Box
      bg="blue.800"
      color="white"
      display={'flex'}
      top={0}
      width="100%"
      padding={4}
      position="sticky"
      marginBottom={4}
      zIndex={1}
    >
      <Flex alignItems="center" gap="20" width="100%">
        <Text fontSize="5xl" color="white.700">
          <Link href="/">
            <a>Sondeos IG</a>
          </Link>
        </Text>
        <Box>
          <ModalMedia></ModalMedia>
        </Box>
      </Flex>
    </Box>
  )
}

export default Header
