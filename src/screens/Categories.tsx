import { Button, Text, View } from "native-base";
import React from "react";

import { useQuery } from "@tanstack/react-query";
import { collections } from "../../core/services/services";
import { Item } from "../../core/types";

const Categories = () => {
  const { data } = useQuery<Item[]>([[collections.carts]]);
  return (
    <View>
      <Text>Categories</Text>

      <Button
        onPress={() => {
          console.log(data);
        }}
      >
        asd
      </Button>
    </View>
  );
};

export default Categories;
