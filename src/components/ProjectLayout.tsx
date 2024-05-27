import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Grid, GridItem, HStack, Image, Link, Stack, Text } from '@chakra-ui/react';
import React from 'react'


interface Props {
    Heading: string;
    children: any;
    href?: string;
  }
  
const ProjectLayout = ({ Heading, children, href }: Props) => {
    return (
        <Stack style={{borderRadius: "5px", padding:"20px", backgroundColor: "#212C41"}} my={2}>
            { href !== undefined ? <Link href={href} isExternal _hover={{color: "white"}} fontWeight={"bold"} >{Heading}<ExternalLinkIcon mx='3px' pb="2px" /></Link>
            : <Text as={"b"} >{Heading}</Text> }
            <Text mb={0} style={{color: "#686E79" }} >{children}</Text>
        </Stack>
      );
}

export default ProjectLayout