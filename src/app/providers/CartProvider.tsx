"use client";

import React from "react";
import { CartContextProvider } from "../../../hooks/useCart";

interface CartProviderProps {
  children: React.ReactNode
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }: {children: React.ReactNode}) => {
  return <CartContextProvider>{children}</CartContextProvider>;
};
