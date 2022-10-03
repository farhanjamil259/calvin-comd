import { Button, Text, View } from "native-base";
import React, { useEffect, useState } from "react";
import {
  CartService,
  collections,
  ItemService,
} from "../../core/services/services";
import { Cart, Item, ItemSlice, ItemType } from "../../core/types";

import { useQuery } from "@tanstack/react-query";
import useData from "../hooks/useData";

const addItem = async () => {
  const item = Item.New(
    "Test Converter",
    "Category B",
    ItemType.converter,
    ["item A", "part A"],
    1,
    200,
    0.25,
    0.25,
    0.5
  );

  try {
    const res = await ItemService.instance.post(item);
  } catch (err) {
    console.log(err);
  }
};

const Parts = () => {
  const { parts } = useData();

  return (
    <View>
      {parts?.map((p) => {
        return <Text key={p.id}>{p.name}</Text>;
      })}

      <Button
        onPress={() => {
          console.log(parts);
        }}
      >
        add item
      </Button>
    </View>
  );
};

export default Parts;
