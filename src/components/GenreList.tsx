import { HStack, Heading, List, ListItem, Text } from "@chakra-ui/layout";
import useGenres, { Genre } from "../hooks/useGenres";
import { Image } from "@chakra-ui/image";
import getCroppedImageUrl from "../services/image-url";
import { Spinner } from "@chakra-ui/spinner";
import { Button } from "@chakra-ui/button";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}
function GenreList({ selectedGenre, onSelectGenre }: Props) {
  const { data, isLoading, error } = useGenres();

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
        {data.map((genre) => (
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
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                fontSize="lg"
                variant="link"
                whiteSpace="normal"
                textAlign="left"
                onClick={() => onSelectGenre(genre)}
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
