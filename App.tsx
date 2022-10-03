import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { CartService } from "./core/services/services";
import { Cart, Item, ItemSlice, ItemType } from "./core/types";

export default function App() {
  useEffect(() => {
    const test = async () => {
      try {
        // const cart = Cart.New("John Doe", 0.1, {
        //   platinum: 12,
        //   rhodium: 10,
        //   palldium: 13,
        // });

        // cart.addItem(
        //   Item.New(
        //     "Abacux 21T",
        //     "Audi",
        //     ItemType.converter,
        //     ["AB-Con"],
        //     1,
        //     0,
        //     0.025,
        //     0.5,
        //     0.25
        //   )
        // );
        // cart.addItem(
        //   Item.New(
        //     "Gigasole 82L",
        //     "Mercedes",
        //     ItemType.converter,
        //     ["LM-Con", "G582-L"],
        //     1.5,
        //     0,
        //     0.35,
        //     0.5,
        //     0.15
        //   )
        // );

        // cart.addItem(
        //   Item.New(
        //     "Wire Converter 12V",
        //     "Audi",
        //     ItemType.wire,
        //     ["WC-12A"],
        //     1,
        //     12
        //   )
        // );

        // await CartService.instance.post(cart);

        const single = (await CartService.instance.get())[0];
        single.client = "John Changed";
        single.materialPrices = {
          platinum: 8,
          rhodium: 7,
          palldium: 6,
        };

        single.items.map((x) => (x.itemSlice = ItemSlice.threeQuarter));
        await CartService.instance.update(single.id, single);
        // await CartService.instance.delete(
        //   "3cf43729-4d29-47e4-a412-15b9c5e52b24"
        // );
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
