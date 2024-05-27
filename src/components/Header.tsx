import { Stack, Text } from '@chakra-ui/react'
import React from 'react'

const Header = () => {
  return (
    <Stack spacing={2}>
    <Text fontSize="5xl" as="b">
      Negin Alipanahi
    </Text>
    <Text fontSize='xl' color={"#a7a9ac"}> Frontend Web Developer </Text>
   
  </Stack>  )
}

export default Header