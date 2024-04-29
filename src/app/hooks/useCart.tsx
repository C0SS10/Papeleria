import { createContext, useCallback, useContext, useState } from "react";
import { CartProductType } from "@/app/types/productTypes";

type ContextType = {
  totalQuantity: number;
  cartProducts: CartProductType[] | null;
  handleAddProduct: (product: CartProductType) => void;
};

export const CartContext = createContext<ContextType | null>(null);

interface Props {
  [propName: string]: any;
}

export const CartContextProvider = (props: Props) => {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [cartProducts, setCartProducts] = useState<CartProductType[] | null>(null);

  const handleAddProduct = useCallback((product: CartProductType)=>{
    setCartProducts((prev)=>{
      let updatedCart;

      if(prev){
        updatedCart = [...prev, product]
      }else{
        updatedCart = [product]
      }

      return updatedCart;
    })
  },[])

  const value = {
    totalQuantity,
    cartProducts,
    handleAddProduct
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
