import firebase from "firebase/app";
import "firebase/firestore";
import { ItemSchema, CartSchema } from "./../types";
import { db } from "./../firebase.config";
import { Cart, Item } from "../types";
import { mapper } from "../helpers/mapper";

const collections = {
  items: "items",
  carts: "carts",
};

const cartConverter: firebase.firestore.FirestoreDataConverter<Cart> = {
  toFirestore: (modelObject: Cart): firebase.firestore.DocumentData => {
    const items: any[] = [];
    modelObject.items.forEach((item) => {
      items.push({ ...item });
    });
    return {
      ...modelObject,
      items: [...items],
    };
  },
  fromFirestore: (
    snapshot: firebase.firestore.QueryDocumentSnapshot<Cart>,
    options: firebase.firestore.SnapshotOptions
  ): Cart => {
    const data = snapshot.data();

    const cart = new Cart(data.profitMarginPercent, data.materialPrices);
    cart.id = snapshot.id;
    cart.client = data.client;
    cart.description = data.description;

    data.items.forEach((item) => {
      cart.items.push(mapper(item, Item, item.id));
    });

    return cart;
  },
};

export class ItemService {
  private db: firebase.firestore.Firestore;

  private static _instance: ItemService;

  static get instance() {
    if (!this._instance) {
      this._instance = new ItemService();
    }
    return this._instance;
  }

  constructor() {
    this.db = db;
  }

  categories() {}

  async get() {
    const snap = await this.db.collection(collections.items).get();

    const mapped: Item[] = [];

    snap.docs.forEach((doc) => {
      const item = mapper(doc.data(), Item, doc.id);
      mapped.push(item);
    });

    return mapped;
  }

  async post(item: ItemSchema) {
    const data = await this.db.collection(collections.items).add({ ...item });
    return mapper(item, Item, data.id);
  }

  async update(id: string, payload: any) {
    return await this.db
      .collection(collections.items)
      .doc(id)
      .update({ ...payload });
  }

  async delete(id: string) {
    return await this.db.collection(collections.items).doc(id).delete();
  }
}

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
    const snap = await this.db.collection(collections.carts).get();

    const mapped: Cart[] = [];

    snap.docs.forEach((doc) => {
      const cart = mapper(doc.data(), Cart, doc.id);
      mapped.push(cart);
    });

    return mapped;
  }

  async post(cart: Cart) {
    const data = await this.db
      .collection(collections.carts)
      .add({ ...(cart as CartSchema) });
    return mapper(cart, Cart, data.id);
  }

  async update(id: string, cart: Cart) {
    return await this.db
      .collection(collections.carts)
      .doc(id)
      .update({ ...cart });
  }

  async delete(id: string) {
    return await this.db.collection(collections.carts).doc(id).delete();
  }
}
