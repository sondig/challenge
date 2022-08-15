import { Box, Text, Flex } from '@chakra-ui/react'

const Footer = () => {
    return (
        <Box bg="blue.800" p={4} color="white" h="100%" className='footer'>
            <Flex justifyContent="center">
                <Text fontSize="1xl" color="blue.700">
                    Copyright © {new Date().getFullYear()} Sebastian Macaya
                    reserved.
                </Text>
            </Flex>
        </Box>
    )
}

export default Footer
