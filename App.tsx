import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { CartService, ItemService } from "./core/services/services";
import { ItemSchema, Item, Cart } from "./core/types";

export default function App() {
  useEffect(() => {
    const test = async () => {
      try {
        // const cart = new Cart();
        // cart.client = "Ahsan Tariq";
        // cart.description = "Lorem ipsum";
        // cart.init(
        //   {
        //     rhodium: 10,
        //     palldium: 12,
        //     platinum: 13,
        //   },
        //   0.2
        // );
        // const c = await CartService.instance.post(cart);
        // console.log("--------");
        // // (await CartService.instance.get())[0];
        // c.client = "John";
        // const i = new Item();
        // i.name = "Silcencer";
        // i.category = "Greater";
        // c.addItem(i);
        // const r = await CartService.instance.update("dQo5UvR80TiweErzPQGF", c);
      } catch (e) {
        console.error(e);
      }
    };

    test();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
