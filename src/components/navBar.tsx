import { Stack } from "@chakra-ui/react";
import SimpleButton from "./SimpleButton";

interface Props {
  onClick: (data: string) => void;
}

const NavBar = ({ onClick }: Props) => {
  return (
    <Stack w={40} gap={2}>
      <SimpleButton onClick={() => onClick("About")}>About</SimpleButton>
      <SimpleButton onClick={() => onClick("Resume")}>Resume</SimpleButton>
      <SimpleButton onClick={() => onClick("Projects")}>Projects</SimpleButton>
    </Stack>
  );
};

export default NavBar;
