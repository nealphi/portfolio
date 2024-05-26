import { Stack } from "@chakra-ui/react";
import SimpleButton from "./SimpleButton";

interface Props {
  onClick: (dtata: string) => void;
}
const NavBar = ({onClick}:Props) => {
  return (
    <Stack w={40} gap={2}>
      <SimpleButton children={"About"} onClick={() => onClick("About")} />
      <SimpleButton children={"Resume"} onClick={() => onClick("Resume")} />
      <SimpleButton children={"Projects"} onClick={() => onClick("Projects")} />
    </Stack>
  );
};

export default NavBar;
