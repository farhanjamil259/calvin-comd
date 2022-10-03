import { Text, View } from "native-base";
import React from "react";
import useData from "../hooks/useData";

const Cart = () => {
  const { carts } = useData();
  return (
    <View>
      {carts?.map((c) => {
        return <Text key={c.id}>Cart</Text>;
      })}
    </View>
  );
};

export default Cart;

//test
