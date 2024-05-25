import { Button, HStack, Slide, Stack, transition } from "@chakra-ui/react";
import React from "react";

const navBar = () => {
  return (
    <Stack w={40} gap={2}>
      <Button>About</Button>
      <Button>Resume</Button>
      <Button>Projects</Button>
    </Stack>
  );
};

export default navBar;
