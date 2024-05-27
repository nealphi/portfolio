import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Box,
  Grid,
  GridItem,
  HStack,
  Link,
  Tag,
  TagLabel,
  Text,
} from "@chakra-ui/react";
import { color } from "framer-motion";

interface Props {
  tags: string[];
  date: string;
  Heading: string;
  SubHeading: string;
  children: string;
  href?: string;
}

const Resume = ({ tags, date, Heading, SubHeading, children, href }: Props) => {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={2} style={{borderRadius: "5px", padding: "15px"}}  _hover={{backgroundColor: "#212C41"}} transition={"all 0.5s"} >
      <GridItem style={{color: "#686E79" }} colSpan={1}>
      <Text fontSize={'xs'} as="b">{date}</Text>
      </GridItem>
      <GridItem colSpan={2}>
        { href !== undefined ? <Link href={href} isExternal _hover={{color: "white"}} fontWeight={"bold"} >{Heading}<ExternalLinkIcon mx='3px' pb="2px" /></Link>
        : <Text as={"b"} >{Heading}</Text> }
        <Text fontSize='sm' >{SubHeading}</Text>
        <Text fontSize={["xs", "sm", "md"]}  style={{color: "#686E79" }} >{children}</Text>
        <HStack spacing={2} display={"flex"} flexWrap={"wrap"} >
         {tags.map((t) => (
            <Tag size={"sm"} py={1}  borderRadius="full" variant="solid" bg="#006a67">
              <TagLabel>{t}</TagLabel>
            </Tag>
          ))}
         
        </HStack>
      </GridItem>
    </Grid>
  );
};

export default Resume;
