import { Badge } from "@chakra-ui/layout";

interface Props {
  score: number;
}

function CriticScore({ score }: Props) {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "";

  return (
    <Badge
      fontSize={"14px"}
      paddingX={2}
      borderRadius={1}
      colorScheme={color}
    >
      {score}
    </Badge>
  );
}

export default CriticScore;
