// export enum Unit {
//   pound = "POUND",
//   Each = "EA",
//   kilo = "KG",
// }

import { TouchableHighlight } from "react-native";

export enum ItemType {
  wire = "WIRE",
  converter = "CONVERTER",
  all = "All",
}

export enum ItemSlice {
  full = 1,
  half = 0.5,
  threeQuarter = 3 / 4,
  quarter = 1 / 4,
}

export interface Metal {
  id: string;
  name: string;
  price: number;
}

interface MatetialPrices {
  platinum: number;
  rhodium: number;
  palldium: number;
}

export interface ItemSchema {
  id: string;
  name: string;
  indetifiers: string[];
  platinumRatio: number;
  rhodiumRatio: number;
  palldiumRatio: number;
  weight: number;
  price: number;
  type: ItemType;
  category: string;
  itemSlice: ItemSlice;
}

export class Item {
  id: string;
  name: string = "";
  indetifiers: string[] = [];
  platinumRatio: number = 0;
  rhodiumRatio: number = 0;
  palldiumRatio: number = 0;
  weight: number = 0;
  price: number = 0;
  type: ItemType = ItemType.converter;
  category: string = "Audi";

  materialPrices: MatetialPrices;
  itemSlice: ItemSlice = ItemSlice.full;

  get amount() {
    const platinumCost =
      this.weight * this.platinumRatio * this.materialPrices?.platinum;
    const rhodiumCost =
      this.weight * this.rhodiumRatio * this.materialPrices?.rhodium;
    const palldiumCost =
      this.weight * this.palldiumRatio * this.materialPrices?.palldium;

    const materialPrice = platinumCost + rhodiumCost + palldiumCost;

    if (materialPrice) {
      return materialPrice + this.price;
    }

    return this.price;
  }
}

export interface CartSchema {
  id: string;
  client: string;
  description: string;
  profitMarginPercent: number;
  _materialPrices: MatetialPrices;
}

export class Cart {
  id: string;
  client: string = "";
  description: string = "";

  profitMarginPercent: number = 0;
  materialPrices: MatetialPrices;
  items: Item[] = [];

  constructor(profitMarginPercent: number, materialPrices: MatetialPrices) {
    this.profitMarginPercent = profitMarginPercent;
    this.materialPrices = this.materialPrices;
  }

  private get bill() {
    let sum = 0;
    this.items.forEach((x) => (sum += x.amount));
    return sum;
  }

  private get profitMargin() {
    return this.bill * this.profitMarginPercent;
  }

  get total() {
    return this.profitMargin + this.bill;
  }

  addItem(item: Item) {
    item.materialPrices = this.materialPrices;
    this.items.push(item);
  }
}
