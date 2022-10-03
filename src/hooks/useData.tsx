import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { collections } from "../../core/services/services";
import { Cart, Item } from "../../core/types";

const useData = () => {
  const { data: carts } = useQuery<Cart[]>([collections.carts]);
  const { data: parts } = useQuery<Item[]>([collections.items]);

  return { carts, parts };
};

export default useData;
