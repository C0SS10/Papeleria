"use client";

import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import { CartProductType } from "@/app/types/productTypes";
import { toast } from "react-hot-toast";

type ContextType = {
  totalQuantity: number;
  cartProducts: CartProductType[] | null;
  cartTotalAmount: number;
  addProduct: (product: CartProductType) => void;
  removeProduct: (product: CartProductType) => void;
  quantityIncrease: (product: CartProductType) => void;
  quantityDecrease: (product: CartProductType) => void;
  clearCart: () => void;
};

export const CartContext = createContext<ContextType | null>(null);

interface Props {
  [propName: string]: any;
}

export const CartContextProvider = (props: Props) => {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [cartProducts, setCartProducts] = useState<CartProductType[] | null>(null);
  const [cartTotalAmount, setCartTotalAmount] = useState<number>(0);

  useEffect(() => {
    const cartItems = localStorage.getItem("cartItems");
    const cProducts: CartProductType[] | null = cartItems ? JSON.parse(cartItems) : null;
    if (cProducts) {
      setCartProducts(cProducts);
    }
  }, []);

  useEffect(() => {
    if (cartProducts) {
      const { total, quantity } = cartProducts.reduce(
        (acc, item) => {
          const itemTotal = item.price * item.stock;
          acc.total += itemTotal;
          acc.quantity += item.stock;
          return acc;
        },
        { total: 0, quantity: 0 }
      );
      setTotalQuantity(quantity);
      setCartTotalAmount(total);
    }
  }, [cartProducts]);

  const addProduct = useCallback((product: CartProductType) => {
    setCartProducts((prev) => {
      const productWithStockOne = { ...product, stock: 1 };
      const updatedCart = prev ? [...prev, productWithStockOne] : [productWithStockOne];
      localStorage.setItem("cartItems", JSON.stringify(updatedCart));
      toast.success("Producto añadido al carrito");
      return updatedCart;
    });
  }, []);

  const removeProduct = useCallback(
    (product: CartProductType) => {
      if (cartProducts) {
        const filteredProducts = cartProducts.filter((item) => item.id !== product.id);
        setCartProducts(filteredProducts);
        localStorage.setItem("cartItems", JSON.stringify(filteredProducts));
        toast.success("Producto removido del carrito");
      }
    },
    [cartProducts]
  );

  const quantityIncrease = useCallback(
    (product: CartProductType) => {
      if (cartProducts) {
        const updatedCart = cartProducts.map((item) =>
          item.id === product.id && item.stock < 10
            ? { ...item, stock: item.stock + 1 }
            : item
        );
        setCartProducts(updatedCart);
        localStorage.setItem("cartItems", JSON.stringify(updatedCart));
        toast.success("Cantidad incrementada");
      }
    },
    [cartProducts]
  );

  const quantityDecrease = useCallback(
    (product: CartProductType) => {
      if (cartProducts) {
        const updatedCart = cartProducts.map((item) =>
          item.id === product.id && item.stock > 1
            ? { ...item, stock: item.stock - 1 }
            : item
        );
        setCartProducts(updatedCart);
        localStorage.setItem("cartItems", JSON.stringify(updatedCart));
        toast.success("Cantidad decrementada");
      }
    },
    [cartProducts]
  );

  const clearCart = useCallback(() => {
    setCartProducts(null);
    setTotalQuantity(0);
    localStorage.setItem("cartItems", JSON.stringify(null));
    toast.success("Carrito limpiado");
  }, []);

  const value = {
    totalQuantity,
    cartProducts,
    cartTotalAmount,
    addProduct,
    removeProduct,
    quantityIncrease,
    quantityDecrease,
    clearCart,
  };

  return <CartContext.Provider value={value} {...props} />;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === null) {
    throw new Error("useCart debe usarse con un CartContextProvider");
  }
  return context;
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <CartContextProvider>{children}</CartContextProvider>;
};
