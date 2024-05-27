import {
  Grid,
  GridItem,
  Icon,
  Stack,
  Tag,
  Text,
  background,
} from "@chakra-ui/react";
import { BsTools } from "react-icons/bs";
import { BsCodeSlash } from "react-icons/bs";
import { color, motion } from "framer-motion";

const Skills = () => {
  const skills = [
    "Git + Github",
    "Tailwind CSS",
    "Bootstrap",
    "React DevTools",
    "Chrome DevTools",
    "Chakra UI",
    "Figma",
    "Google Fonts",
  ];

  const development = [
    "JavaScript",
    "HTML5",
    "CSS3",
    "React.js",
    "TypeScript",
    "jQuery",
  ];

  const variants = {
    active: {
      color: "#ffffff",
      borderColor: "#006a67",
    },

    inactive: {
      color: "#212C41",
      borderColor: "#212C41",
    },
  };

  return (
    <Stack h={300} w={350} mt={10}>
      <Text
        style={{ display: "flex", alignItems: "center" }}
        fontSize={"md"}
        as={"b"}
        gap={2}
        color={"#a7a9ac"}
      >
        <Icon boxSize={5} as={BsCodeSlash} />
        {"  "}DEVELOPMENT
      </Text>
      <Grid templateColumns={"repeat(6, 1fr)"} mb={4}>
        {development.map((d, i) => (
          <GridItem
            colSpan={d.length > 13 ? 3 : 2}
          >
            <Tag
              variants={variants}
              animate={"active"}
              initial={"inactive"}
              transition="0.5s"
              transitionDelay={`${(i) * 0.5}s`}
              as={motion.div}
              display={"flex"}
              justifyContent={"center"}
              borderRadius="full"
              border="1px solid"
              bg={"none"}
              m={1}
              py={2}
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
        {skills.map((s, i) => (
          <GridItem as={motion.div} colSpan={s.length > 13 ? 3 : 2}>
            <Tag
              variants={variants}
              initial="inactive"
              animate="active"
              transition="0.5s linear"
              transitionDelay={`${i * 0.4}s`}
              as={motion.div}
              display={"flex"}
              justifyContent={"center"}
              borderRadius="full"
              bg={"none"}
              border={"1px solid"}
              borderColor="#212C41"
              color={"#212C41"}
              m={1}
              py={2}
              _hover={{ borderColor: "#006a67", color: "white" }}
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
