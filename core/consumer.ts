import { Cart, Item, ItemType } from "./types";
import { CartService, ItemService } from "./services/services";

const run = async () => {
  try {
    const cart = Cart.New("John Doe", 0.1, {
      platinum: 12,
      rhodium: 10,
      palldium: 13,
    });

    cart.addItem(
      Item.New(
        "Abacux 21T",
        "Audi",
        ItemType.converter,
        ["AB-Con"],
        1,
        0,
        0.025,
        0.5,
        0.25
      )
    );
    cart.addItem(
      Item.New(
        "Gigasole 82L",
        "Mercedes",
        ItemType.converter,
        ["LM-Con", "G582-L"],
        1.5,
        0,
        0.35,
        0.5,
        0.15
      )
    );

    cart.addItem(
      Item.New("Wire Converter 12V", "Audi", ItemType.wire, ["WC-12A"], 1, 12)
    );

    await CartService.instance.post(cart);

    // const cart = (await CartService.instance.get())[0];
    // cart.client = "John Changed";
    // cart.materialPrices = {
    //   platinum: 8,
    //   rhodium: 7,
    //   palldium: 6,
    // };

    // cart.items.map((x) => (x.itemSlice = ItemSlice.threeQuarter));
    // await CartService.instance.update(cart.id, cart);

    // await CartService.instance.delete(
    //   "3cf43729-4d29-47e4-a412-15b9c5e52b24"
    // );

    // await ItemService.instance.post(
    //   Item.New("Wire Converter 12V", "Audi", ItemType.wire, ["WC-12A"], 1, 12)
    // );

    // const items = await ItemService.instance.get();
    // const item = items.find(
    //   (x) => x.id === "f96d6ab3-fbe1-4fea-978d-31aa863111d5"
    // );

    // if (item) {
    //   item.basePrice = 15;
    //   item.removeIdentifier("WC-12BA");
    //   await ItemService.instance.update(item.id, item);
    // }

    // console.log(
    //   await ItemService.instance.delete("f96d6ab3-fbe1-4fea-978d-31aa863111d5")
    // );

    console.log("done");
  } catch (e) {
    console.error(e);
  }
};

run();
