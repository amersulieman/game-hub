import Genre from "./Genre";
import Platform from "./Platform";
import Publisher from "./publisher";

export default interface Game {
  id: number;
  name: string;
  slug: string;
  genres: Genre[];
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
  rating: number;
  description_raw: string;
  publishers: Publisher[];
}
