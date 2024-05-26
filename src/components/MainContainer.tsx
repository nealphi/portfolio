import { Box, Grid, GridItem, Link, Text } from "@chakra-ui/react";
import Header from "./Header";
import About from "./About";
import Resume from "./Resume";
import NavBar from "./NavBar";
import SocialMediaLinks from "./SocialMediaLinks";
import { useEffect, useRef, useState } from "react";

const MainContainer = () => {
  const [isSelectedBtn, setIsSelectedBtn] = useState("");
  const onClick = (data: string): void => {
    setIsSelectedBtn(data);
  };

  useEffect(() => {
    setIsSelectedBtn("");
    if (isSelectedBtn === "About") {
      window.scrollTo(0, 0);
    } else if (isSelectedBtn === "Resume") window.scrollTo(400, 400);
    else if (isSelectedBtn === "Projects") window.scrollTo(1000, 1000);
  }, [isSelectedBtn]);

  useEffect(() => {
    setIsSelectedBtn("About");
  }, []);

  return (
    <Grid
      templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
      gap={6}
      mx={{ base: "30", lg: "180" }}
      my={{ base: "30", lg: "100" }}
    >
      <GridItem h={"600"}>
        <Box position={{ lg: "fixed" }}>
          <Box maxWidth={400} h={250}>
            <Header />
          </Box>
          <Box display={"flex"} h={250} alignItems={"center"}>
            <NavBar
              onClick={(data) => {
                onClick(data);
              }}
            />
          </Box>
          <Box display={"flex"} h={100} alignItems={"end"}>
            <SocialMediaLinks />
          </Box>
        </Box>
      </GridItem>
      <GridItem display={"flex"} flexDirection={"column"} p={5}>
        <About />
        <Resume
          tags={[
            "React.js",
            "TypeScript",
            "JavaSript",
            "Tailwind css",
            "Chakra UI",
            "Material UI",
            "Emotion",
            "Vite",
          ]}
          date={"May 2021 - May 2024"}
          Heading={"Frontend Web Developer"}
          SubHeading={"PELAK, Tehran, Tehran, Iran"}
          children={
            "Collaborated with development team to develop, test, debug, and update the web application. Created customizable, reusable, and dynamic frontend components using React and TypeScript. Optimized RESTful API calls to reduce load times, resulting in a 15% increase in page speed. Collaborated with cross-functional teams to meet project milestones and deadlines."
          }
        />

        <Resume
          tags={[
            "HTML",
            "CSS",
            "JavaScript",
            "jQuery",
            "Bootstrap",
            "Git",
            "RESTful APIs",
            "Figma",
            "Responsive Design",
          ]}
          date={"Mar 2021 - May 2021"}
          Heading={"Frontend Web Developer Intern"}
          SubHeading={"PELAK, Tehran, Tehran, Iran"}
          children={
            "Assisted the development team in developing and debugging the web application. Gained experience in creating reusable frontend components using React and TypeScript. Implemented accessibility standards such as WCAG 2.0 to ensure maximum user experience. Gained experience working with RESTful APIs and asynchronous request handling."
          }
        />

        <Resume
          tags={[
            "WordPress",
            "SEO",
            "digital marketing",
            "Social Media Management",
            "Content Creation",
            "Adobe Photoshop",
            "Adobe Premiere",
            "Photography",
          ]}
          date={"Feb 2020 - May 2024"}
          Heading={"Small Business Owner (Online Shop)"}
          href="https://www.instagram.com/nealphi/"
          SubHeading={"NEALPHI, Tehran, Tehran, Iran"}
          children={
            "Successfully established and managed different aspects of a small business, including inventory management, order fulfillment, and marketing. Developed an online shop website using WordPress, implementing custom design elements and ensuring functionality for e-commerce transactions. Utilized WordPress plugins and custom coding to enhance website performance and user experience. Provided ongoing maintenance and support for the website, including troubleshooting technical issues and implementing updates. Implemented SEO best practices to improve website visibility."
          }
        />

        <Resume
          tags={["MS Project", "Project Management"]}
          date={"Aug 2014 - Mar 2018"}
          Heading={"Assistant Project Manager"}
          SubHeading={"Golandishe IT-Company, Tehran, Tehran, Iran"}
          children={
            "Analyzing business and operational processes, preparing process charts, and designing equipment and plant layouts. Creating work breakdown structures, breaking the operational processes into activities, and performing time studies for different work cycles."
          }
        />
              <Link href="/resume">View Full Résumé </Link>

        <Text fontSize="sm" color={"#686E79"} my={10}>
          Inspired by{" "}
          <Link
            _hover={{
              color: "#006a67",
            }}
            href="https://brittanychiang.com/#experience"
          >
            {" "}
            Brittany Chiang
          </Link>{" "}
          portfolio design and coded in Visual Studio Code by me. Built with
          vite.js and Chakra UI. Deployed with Vercel.
        </Text>
      </GridItem>
    </Grid>
  );
};

export default MainContainer;
