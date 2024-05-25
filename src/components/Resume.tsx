import {
  Box,
  Grid,
  GridItem,
  HStack,
  Hide,
  SimpleGrid,
  Stack,
  Tag,
  TagCloseButton,
  TagLabel,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Resume = () => {
  return (
    <Grid templateColumns="repeat(3, 1fr)">
      <GridItem colSpan={1}>1</GridItem>
      <GridItem colSpan={2}>
        {" "}
        <Text>
          {" "}
          Back in 2012, I decided to try my hand at creating custom Tumblr
          themes and tumbled head first into the rabbit hole of coding and web
          development. Fast-forward to today, and I’ve had the privilege of
          building software for an advertising agency, a start-up, a huge
          corporation, and a digital product studio. My main focus these days is
          building accessible user interfaces for our customers at Klaviyo. I
          most enjoy building software in the sweet spot where design and
          engineering meet — things that look good but are also built well under
          the hood. In my free time, I've also released an online video course
          that covers everything you need to know to build a web app with the
          Spotify API. When I’m not at the computer, I’m usually rock climbing,
          reading, hanging out with my wife and two cats, or running around
          Hyrule searching for Korok seeds K o r o k s e e d s .
        </Text>
        <HStack spacing={4}>
          <Tag borderRadius="full" variant="solid" colorScheme="green">
            <TagLabel>Green</TagLabel>
            <TagCloseButton />
          </Tag>
        </HStack>
      </GridItem>
    </Grid>
  );
};

export default Resume;
