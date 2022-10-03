import { Input, Icon, HStack } from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";

import React from "react";

function SearchBar() {
  return (
    <HStack width="full" justifyContent="space-between">
      <Input
        autoCapitalize="none"
        width="full"
        InputLeftElement={
          <Icon
            ml="3"
            size="4"
            color="gray.400"
            as={<Ionicons name="search" />}
          />
        }
      />
    </HStack>
  );
}

export default SearchBar;
