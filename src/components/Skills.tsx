import { Box, Grid, GridItem, Icon, Stack, Tag, Text } from "@chakra-ui/react";
import { BsTools } from "react-icons/bs";
import { BsCodeSlash } from "react-icons/bs";
const Skills = () => {
  const skills = [
    "Git + Github",
    "Tailwind CSS",
    "Bootstrap",
    "React DevTools",
    "Chrome DevTools",
    "Chakra UI",
    "Figma",
    "Google Fonts"
  ];

  const development = [
    "JavaScript",
    "HTML5",
    "CSS3",
    "React.js",
    "TypeScript",
    "jQuery"
  ]

  return (
    <Stack h={300} w={350} mt={10}>
      {/* <Text
        style={{ display: "flex", alignItems: "center" }}
        fontSize={"md"}
        as={"b"}
        gap={1}
      >
        SKILLS
      </Text> */}
      <Text
        style={{ display: "flex", alignItems: "center" }}
        fontSize={"md"}
        as={"b"}
        gap={1}
        color={"#a7a9ac"}      >
        <Icon boxSize={5} as={BsCodeSlash} />
        {"  "}DEVELOPMENT
      </Text>
      <Grid templateColumns={"repeat(6, 1fr)"} mb={2}>
        {development.map((d) => (
          <GridItem colSpan={ d.length > 13 ? 3 : 2 }>
            <Tag
              display={"flex"}
              justifyContent={"center"}
              borderRadius="full"
              bg={"none"}
              border={"1px solid"}
              borderColor="#212C41"
              color={"#212C41"}
              m={1}
              py={2}
              _hover={{ borderColor:"#006a67" , color: "white"}}
              transition="all 0.7s cubic-bezier(.08,.52,.52,1)"

            >
              {d}
            </Tag>
          </GridItem>
        ))}
      </Grid>
      <Text
        style={{ display: "flex", alignItems: "center" }}
        fontSize={"md"}
        as={"b"}
        gap={1}
        color={"#a7a9ac"}
      >
        <Icon boxSize={4} as={BsTools} />
        {"  "}TOOLS
      </Text>
      <Grid templateColumns={"repeat(6, 1fr)"}>
        {skills.map((s) => (
          <GridItem colSpan={ s.length > 13 ? 3 : 2 }>
            <Tag
              display={"flex"}
              justifyContent={"center"}
              borderRadius="full"
              bg={"none"}
              border={"1px solid"}
              borderColor="#212C41"
              color={"#212C41"}
              m={1}
              py={2}
              _hover={{ borderColor:"#006a67" , color: "white"}}
              transition="all 0.7s cubic-bezier(.08,.52,.52,1)"

            >
              {s}
            </Tag>
          </GridItem>
        ))}
      </Grid>
      <GridItem>
        <Text></Text>
      </GridItem>
    </Stack>
  );
};

export default Skills;
