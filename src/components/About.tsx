import { Hide, Stack, Text } from "@chakra-ui/react";

const About = () => (
  <Stack mb={"5"}>
    <Hide above="md">
      <Text> About </Text>
    </Hide>
    <Text>
      Back in 2020, during the COVID-19 pandemic, I decided to try my hand on
      something highly engaging to survive the lockdown. My first foray into web
      development was building a website for my small business using WordPress.
      This project led me deep down the rabbit hole of coding and web
      development, ending up working in a Tech company as a Frontend web
      developer.
      </Text>
      <Text>
        Having studied both Engineering and Applied Arts, I spent years
        exploring both fields until I found my niche at the intersection of
        Engineering and Design. Minimal on the surface yet maximal in
        functionality, are the designs I most enjoy working on.
      </Text>
      <Text>
        When I'm not at the computer, you can find me in my studio behind my
        sewing machine, designing bags and apparel.
      </Text>

  </Stack>
);

export default About;
