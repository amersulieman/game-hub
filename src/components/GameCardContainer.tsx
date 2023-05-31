import { Box } from "@chakra-ui/layout";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function GameCardContainer({ children }: Props) {
  return (
    <Box
      borderRadius={10}
      overflow="hidden"
      width="100%"
    >
      {children}
    </Box>
  );
}

export default GameCardContainer;
