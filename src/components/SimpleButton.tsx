import { Button } from "@chakra-ui/react";

interface SimpleButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

const SimpleButton = ({ children, onClick }: SimpleButtonProps) => {
  return <Button onClick={onClick}>{children}</Button>;
};

export default SimpleButton;
