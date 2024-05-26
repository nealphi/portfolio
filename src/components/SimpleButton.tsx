import { Box, Text } from "@chakra-ui/react";

interface Props {
  children: string;
  onClick: () => void;
}

const SimpleButton = ({ children, onClick }: Props) => {

  return (
    // Button from facebook.com

    <Box
      as="button"
      width="130px"
      height="30px"
      transition="all 0.7s cubic-bezier(.08,.52,.52,1)"
      borderRadius="5px"
      fontSize="14px"
      fontWeight="bold"
      bg="#212C41"
      color="#B6B6B6"
      justifyContent="center"
      _hover={{ color: "white", bg: "#006a67", w: "170px" }}
      _active={{
        bg: "gray",
        transform: "scale(0.98)",
        borderColor: "#bec3c9",
      }}
      onClick={() => onClick()}
    >
      {children}
    </Box>
  );
};

export default SimpleButton;
