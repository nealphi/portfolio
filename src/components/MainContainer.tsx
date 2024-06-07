import { Box, Grid, GridItem, Hide, Link, Show, Text } from "@chakra-ui/react";
import Header from "./Header";
import About from "./About";
import Resume from "./Resume";
import SocialMediaLinks from "./SocialMediaLinks";
import { useEffect, useRef, useState } from "react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import ProjectLayout from "./ProjectLayout";
import Skills from "./Skills";
import NavBarBtn from "./NavBarBtn";

const MainContainer = () => {
  const onClick = (data: string): void => {
    setIsSelectedBtn(data);
  };
  const [isSelectedBtn, setIsSelectedBtn] = useState("main");
  const mainRef = useRef(null);
  const aboutRef = useRef(null);
  const resumeRef = useRef(null);
  const projectsRef = useRef(null);

  useEffect(() => {
    const getBodyMarginTop = () => {
      const bodyStyle = window.getComputedStyle(document.body);
      return parseInt(bodyStyle.marginTop) || 0;
    };

    const scrollToRef = (ref:any) => {
      if (ref && ref.current) {
        const bodyMarginTop = getBodyMarginTop();
        window.scrollTo({
          top: ref.current.offsetTop + bodyMarginTop,
          behavior: "smooth",
        });
      }
    };

    if (isSelectedBtn === "main") {
      scrollToRef(mainRef);
    } else if (isSelectedBtn === "About") {
      scrollToRef(aboutRef);
    } else if (isSelectedBtn === "Resume") {
      scrollToRef(resumeRef);
    } else if (isSelectedBtn === "Projects") {
      scrollToRef(projectsRef);
    }

   
  }, [isSelectedBtn]);

  return (
    <Grid
      templateColumns={{
        base: "repeat(1, 1fr)",
        lg: "repeat(2, 1fr)",
        xl: "repeat(2, 1fr)",
      }}
      gap={6}
      ref={mainRef}
    >
      <GridItem
        h={["600", "700"]}
        display={"flex"}
        padding={"20px"}
        position={"relative"}
      >
        {/* <Animated /> */}
        <Box position={{ lg: "fixed" }}>
          <Box>
            <Header />
          </Box>
          <Box>
            <Link
              color={"#006a67"}
              href="/NeginAlipanahiCV.pdf"
              isExternal
              _hover={{ color: "#01afaa" }}
              fontWeight={"bold"}
            >
              View Full Résumé <ExternalLinkIcon mx="2px" />
            </Link>
          </Box>
          <Box display={"flex"} h={100} mt={5}>
            <NavBarBtn
              onClick={(data: string) => {
                onClick(data);
              }}
            />
          </Box>
          <Box>
            <Skills />
          </Box>
          <Hide below="lg">
            <Box h={100} mt={5}>
              <SocialMediaLinks />
            </Box>
          </Hide>
        </Box>
      </GridItem>
      <GridItem display={"flex"} flexDirection={"column"} p={5}>
      <div ref={aboutRef}></div>
        <Hide above="md">
          <Text
            style={{ display: "flex", alignItems: "center" }}
            fontSize={"md"}
            as={"b"}
            mb={3}
            color={"#a7a9ac"}
          >
            ABOUT
          </Text>
        </Hide>
        <About />
        <div ref={resumeRef}></div>
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
        <Box h={10}></Box>
        <div ref={projectsRef}></div>
        <ProjectLayout
          Heading={"Game-Hub Project"}
          children={
            <Text>
              A video game discovery web app that helps you find new and
              interesting games to play. With GameHub, you can search for games
              by platform, genre, and more. Built with vite.js, TypeScript and
              Chakra UI, using RAWG API for fetching the Games.
            </Text>
          }
          href="https://game-hub-liart-sigma.vercel.app/"
        />
        <ProjectLayout
          Heading={"Portfolio Project"}
          children={
            <Text>
              Inspired by{" "}
              <Link
                _hover={{
                  color: "#006a67",
                }}
                href="https://brittanychiang.com/#experience"
              >
                Brittany Chiang
              </Link>{" "}
              portfolio design and coded in Visual Studio Code by me. Built with
              vite.js and Chakra UI. Animated with Framer Motion and Deployed
              with Vercel.
            </Text>
          }
          href=""
        />
        <ProjectLayout
          Heading={"To-Do-List Application"}
          children={
            "An application for tracking your To-Do's with filtering option. Designed in Figma, coded with React and deployed with Vercel."
          }
          href="https://to-do-app-react-nealphis-projects.vercel.app/"
        />
        <ProjectLayout
          Heading={"Analog Clock Project"}
          children={"Coded and styled with vanilla JavaScript and CSS."}
          href="https://github.com/nealphi/Clock"
        />
        <ProjectLayout
          Heading={"Coin Flip Project"}
          children={"Coded and styled with vanilla JavaScript and CSS."}
          href="https://github.com/nealphi/Flip-a-Coin"
        />
      </GridItem>
      <Hide above="md">
        <Box display={"flex"} justifyContent={"center"} h={100} mt={5}>
          <SocialMediaLinks />
        </Box>
      </Hide>
    </Grid>
  );
};

export default MainContainer;
