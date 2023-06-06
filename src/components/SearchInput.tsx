import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store";
import { useNavigate } from "react-router-dom";

function SearchInput() {
  const searchRef = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore((selector) => selector.setSearchText);
  const navigate = useNavigate();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (searchRef.current) {
          setSearchText(searchRef.current.value);
          navigate("/");
        }
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={searchRef}
          borderRadius={20}
          placeholder="Search games..."
          variant="filled"
        />
      </InputGroup>
    </form>
  );
}

export default SearchInput;
