import uuid from "react-native-uuid";

export enum ItemType {
  wire = "WIRE",
  converter = "CONVERTER",
}

export enum ItemSlice {
  full = 1,
  half = 0.5,
  threeQuarter = 3 / 4,
  quarter = 1 / 4,
}

export interface MaterialPrices {
  platinum: number;
  rhodium: number;
  palldium: number;
}

export class Item {
  id: string;
  name: string = "";
  type: ItemType = ItemType.converter;
  category: string = "Audi";
  indetifiers: string[] = [];
  weight: number = 0;
  basePrice: number = 0;
  platinumRatio: number = 0;
  rhodiumRatio: number = 0;
  palldiumRatio: number = 0;

  static New(
    name: string,
    category: string,
    type: ItemType = ItemType.converter,
    identifiers: string[] = [],
    weight = 0,
    basePrice = 0,
    platinumRatio = 0,
    rhodiumRatio = 0,
    palldiumRatio = 0
  ): Item {
    const item = new Item();
    item.id = uuid.v4().toString();
    item.name = name;
    item.type = type;
    item.category = category;
    item.indetifiers = identifiers;
    item.weight = weight;
    item.basePrice = basePrice;
    item.platinumRatio = platinumRatio;
    item.rhodiumRatio = rhodiumRatio;
    item.palldiumRatio = palldiumRatio;

    return item;
  }

  addIdentifier(identifier: string) {
    if (this.indetifiers.indexOf(identifier) === -1) {
      this.indetifiers.push(identifier);
    }
  }

  removeIdentifier(identifier: string) {
    const index = this.indetifiers.indexOf(identifier, 0);
    if (index > -1) {
      this.indetifiers.splice(index, 1);
    }
  }
}

export class CartItem extends Item {
  materialPrices: MaterialPrices;
  itemSlice: ItemSlice = ItemSlice.full;

  static New(
    name: string,
    category: string,
    type: ItemType = ItemType.converter,
    identifiers: string[] = [],
    weight = 0,
    basePrice = 0,
    platinumRatio = 0,
    rhodiumRatio = 0,
    palldiumRatio = 0
  ): Item {
    const item = new Item();
    item.id = uuid.v4().toString();
    item.name = name;
    item.type = type;
    item.category = category;
    item.indetifiers = identifiers;
    item.weight = weight;
    item.basePrice = basePrice;
    item.platinumRatio = platinumRatio;
    item.rhodiumRatio = rhodiumRatio;
    item.palldiumRatio = palldiumRatio;

    return item;
  }

  get price() {
    const platinumCost =
      this.weight * this.platinumRatio * this.materialPrices?.platinum;
    const rhodiumCost =
      this.weight * this.rhodiumRatio * this.materialPrices?.rhodium;
    const palldiumCost =
      this.weight * this.palldiumRatio * this.materialPrices?.palldium;

    const materialPrice = platinumCost + rhodiumCost + palldiumCost;
    let price = this.basePrice;

    if (materialPrice) {
      price += materialPrice;
    }

    return price;
  }

  get amount() {
    return this.price * this.itemSlice;
  }
}

export class Cart {
  id: string;
  client: string = "";
  description: string = "";
  profitMarginPercent: number = 0;
  materialPrices: MaterialPrices;
  items: CartItem[] = [];

  static New(
    client: string,
    profitMarginPercent: number,
    materialPrices: MaterialPrices
  ): Cart {
    const cart = new Cart();
    cart.id = uuid.v4().toString();
    cart.client = client;
    cart.profitMarginPercent = profitMarginPercent;
    cart.materialPrices = materialPrices;
    return cart;
  }

  private get bill() {
    let sum = 0;
    this.items.forEach((x) => (sum += x.price));
    return sum;
  }

  private get profitMargin() {
    return this.bill * this.profitMarginPercent;
  }

  get total() {
    return this.profitMargin + this.bill;
  }

  get quantity() {
    return this.items.length;
  }

  addItem(item: Item, slice: ItemSlice = ItemSlice.full) {
    const cartItem = item as CartItem;
    cartItem.id = uuid.v4().toString();
    cartItem.materialPrices = this.materialPrices;
    cartItem.itemSlice = slice;
    this.items.push(cartItem);
  }

  removeItem(id: string) {
    this.items = this.items.filter((x) => x.id !== id);
  }
}
