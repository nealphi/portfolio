import { Stack, Text } from '@chakra-ui/react'
import React from 'react'

const Header = () => {
  return (
    <Stack  spacing={3}>
    <Text fontSize="5xl" as="b">
      Negin Alipanahi
    </Text>
    <Text fontSize='2xl' as="b">Frontend Web Developer</Text>
    <Text>
    A multipotentialite with an academic background and work experience in both Engineering and Applied Arts. I wander between the two, until I settle where Technology meets Art.
    </Text>
   
  </Stack>  )
}

export default Header