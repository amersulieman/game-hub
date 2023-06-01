import { Button } from "@chakra-ui/button";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/useGames";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

function PlatformSelector({ onSelectPlatform, selectedPlatform }: Props) {
  const { data, error } = usePlatforms();
  if (error) return null;
  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<BsChevronDown />}
      >
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data.map((platform) => {
          return (
            <MenuItem
              onClick={() => onSelectPlatform(platform)}
              key={platform.id}
            >
              {platform.name}
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}

export default PlatformSelector;
