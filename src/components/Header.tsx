import { Stack, Text } from '@chakra-ui/react'
import React from 'react'

const Header = () => {
  return (
    <Stack spacing={3}>
    <Text fontSize="5xl" as="b">
      Negin Alipanahi
    </Text>
    <Text fontSize='2xl' as="b">Frontend Web Developer</Text>
    <Text>
      I build clean, engaging, and accessible digital experiences.
    </Text>
   
  </Stack>  )
}

export default Header