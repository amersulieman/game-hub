import { useParams } from "react-router-dom";
import { Heading, Spinner, Text } from "@chakra-ui/react";
import useGame from "../hooks/useGame";

function GameDetailPage() {
  const { slug } = useParams();

  const { data: game, isLoading, error } = useGame(slug!);
  if (isLoading) return <Spinner />;
  // router error page will catch it and we can log it there
  if (error || !game) throw error;

  return (
    <>
      <Heading>{game.name}</Heading>
      <Text>{game.description_raw}</Text>
    </>
  );
}

export default GameDetailPage;
