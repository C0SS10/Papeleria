"use client";

import React, { createContext, useState } from "react";
import { CartContextProvider } from "@/app/hooks/useCart";

interface CartProviderProps {
  children: React.ReactNode;
}

const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  return <CartContextProvider> {children} </CartContextProvider>;
};

export default CartProvider;
