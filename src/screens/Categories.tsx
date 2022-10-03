import { Button, Text, View } from "native-base";
import React from "react";

import { useQuery } from "@tanstack/react-query";
import { collections } from "../../core/services/services";
import { Cart, Item } from "../../core/types";
import useData from "../hooks/useData";

const Categories = () => {
  const { carts } = useData();

  return (
    <View>
      <Text>Categories</Text>

      <Button
        onPress={() => {
          console.log(carts);
        }}
      >
        asd
      </Button>
    </View>
  );
};

export default Categories;
