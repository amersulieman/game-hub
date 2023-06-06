import { Box } from "@chakra-ui/layout";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function GameCardContainer({ children }: Props) {
  return (
    <Box
      _hover={{
        transform: "scale(1.03)",
        transition: "transform .15s ease-in",
      }}
      borderRadius={10}
      overflow="hidden"
      width="100%"
    >
      {children}
    </Box>
  );
}

export default GameCardContainer;
