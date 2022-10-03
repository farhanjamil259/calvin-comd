import { Button, Text, View } from "native-base";
import React, { useEffect, useState } from "react";
import {
  CartService,
  collections,
  ItemService,
} from "../../core/services/services";
import { Cart, Item, ItemSlice, ItemType } from "../../core/types";

import { useQuery } from "@tanstack/react-query";

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
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

const Parts = () => {
  const [parts, setParts] = useState<Item[]>([]);

  const { data } = useQuery<Item[]>([collections.items]);

  useEffect(() => {
    const getItems = async () => {
      const res = await ItemService.instance.get();

      setParts(res);

      const cart = Cart.New("Farhan", 0.1, {
        rhodium: 10,
        platinum: 20,
        palldium: 30,
      });

      cart.addItem(res[0], ItemSlice.half);

      CartService.instance.post(cart);
    };

    getItems();
  }, []);

  return (
    <View>
      {data?.map((p) => {
        return <Text key={p.id}>{p.name}</Text>;
      })}

      <Button
        onPress={() => {
          console.log(data);
        }}
      >
        add item
      </Button>
    </View>
  );
};

export default Parts;
