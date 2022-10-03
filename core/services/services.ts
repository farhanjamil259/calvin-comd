import firebase from "firebase/app";
import "firebase/firestore";
import { db } from "./../firebase.config";
import { Cart, CartItem, Item, ItemType } from "../types";
import { mapper } from "../helpers/mapper";

const collections = {
  items: "items",
  carts: "carts",
};

const CartConverter = {
  toFirestore: (cart: Cart): firebase.firestore.DocumentData => {
    const items: any[] = [];

    cart.items.forEach((item) => {
      items.push(mapper(item, CartItem, item.id, {}, true));
    });

    const doc = {
      ...cart,
      items: [...items],
    };

    return doc;
  },
  fromFirestore: (
    snapshot: firebase.firestore.QueryDocumentSnapshot<Cart>,
    options: firebase.firestore.SnapshotOptions
  ): Cart => {
    const data = snapshot.data();

    const cart = new Cart();
    cart.id = data.id;
    cart.client = data.client;
    cart.description = data.description;
    cart.materialPrices = data.materialPrices;
    cart.profitMarginPercent = data.profitMarginPercent;

    data.items.forEach((item) => {
      cart.items.push(
        mapper(item, CartItem, item.id, { materialPrices: cart.materialPrices })
      );
    });

    return cart;
  },
};

export class CartService {
  private db: firebase.firestore.Firestore;

  private static _instance: CartService;

  static get instance() {
    if (!this._instance) {
      this._instance = new CartService();
    }
    return this._instance;
  }

  constructor() {
    this.db = db;
  }

  categories() {}

  async get() {
    const data = await this.db
      .collection(collections.carts)
      .withConverter(CartConverter)
      .get();

    const mapped: Cart[] = [];

    data.docs.forEach((doc) => {
      mapped.push(doc.data());
    });

    return mapped;
  }

  async post(cart: Cart) {
    return await this.db
      .collection(collections.carts)
      .withConverter(CartConverter)
      .doc(cart.id)
      .set(cart);
  }

  async update(id: string, cart: Cart) {
    return await this.db
      .collection(collections.carts)
      .withConverter(CartConverter)
      .doc(id)
      .set(cart);
  }

  async delete(id: string) {
    return await this.db.collection(collections.carts).doc(id).delete();
  }
}
