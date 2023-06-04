import { Heading } from "@chakra-ui/layout";
import usePlatform from "../hooks/usePlatform";
import useGenere from "../hooks/useGenre";
import useGameQueryStore from "../store";

function GameHeading() {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genre = useGenere(genreId);

  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platform = usePlatform(platformId);

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
