import { Heading } from "@chakra-ui/layout";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";
import usePlatform from "../hooks/usePlatform";
import useGenere from "../hooks/useGenre";

interface Props {
  gameQuery: GameQuery;
}

function GameHeading({ gameQuery }: Props) {
  const genre = useGenere(gameQuery.genreId);
  const platform = usePlatform(gameQuery.platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Game`;
  return (
    <Heading
      as={"h1"}
      marginY={5}
      fontSize="5xl"
    >
      {heading}
    </Heading>
  );
}

export default GameHeading;
