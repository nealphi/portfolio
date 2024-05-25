import { Box, Grid, GridItem, SimpleGrid, flexbox } from "@chakra-ui/react";
import Header from "./Header";
import About from "./About";
import Resume from "./Resume";
import References from "./SocialMediaLinks";
import NavBar from "./NavBar";
import SocialMediaLinks from "./SocialMediaLinks";

const MainContainer = () => {
  return (
    <Grid
      templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
      gap={6}
      m={{ base: "30", lg: "100" }}
    >
      <GridItem display={"flex"} flexDirection={"column"} h={"600"}>
        <Box position={"fixed"}>
          <Box h={250}>
            <Header />
          </Box>
          <Box h={250}>
            <NavBar />
          </Box>
          <Box display={"flex"} h={100} alignItems={"end"}>
            <SocialMediaLinks />
          </Box>
        </Box>
      </GridItem>
      <GridItem display={"flex"} flexDirection={"column"} bg="red.500">
        <About />
        <Resume />
      </GridItem>
    </Grid>
  );
};

export default MainContainer;
