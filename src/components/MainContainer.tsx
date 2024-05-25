import {
  Box,
  Grid,
  GridItem,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import NavBar from "./navBar";
import Header from "./Header";
import About from "./About";
import Resume from "./Resume";
import References from "./SocialMediaLinks";

const MainContainer = () => {
  return (
    <SimpleGrid columns={[1, null, 2]} spacing={10} m={[30, 150]}>
      <Box height="85vh">
        <Box mb={20}>
          <Header />
          <NavBar />
        </Box>
        <Box display={"flex"} >
          <References />
        </Box>
      </Box>
      <Box>
        <Box height="auto">
          <About />
          <Resume />
        </Box>
      </Box>
    </SimpleGrid>
  );
};

export default MainContainer;
