import { useParams } from "react-router-dom";
import { Heading, Spinner } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import ExpandableText from "../components/ExpandableText";

function GameDetailPage() {
  const { slug } = useParams();

  const { data: game, isLoading, error } = useGame(slug!);
  if (isLoading) return <Spinner />;
  // router error page will catch it and we can log it there
  if (error || !game) throw error;

  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
    </>
  );
}

export default GameDetailPage;
