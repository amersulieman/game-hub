import { HStack, Heading, List, ListItem, Text } from "@chakra-ui/layout";
import useGenres from "../hooks/useGenres";
import Genre from "../entities/Genre";
import { Image } from "@chakra-ui/image";
import getCroppedImageUrl from "../services/image-url";
import { Spinner } from "@chakra-ui/spinner";
import { Button } from "@chakra-ui/button";
import useGameQueryStore from "../store";

function GenreList() {
  const { data, isLoading, error } = useGenres();
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading
        fontSize="2xl"
        marginBottom={3}
      >
        Genres
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem
            key={genre.id}
            paddingY={"5px"}
          >
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                fontSize="lg"
                variant="link"
                whiteSpace="normal"
                textAlign="left"
                onClick={() => setSelectedGenreId(genre.id)}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default GenreList;
