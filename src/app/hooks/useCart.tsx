import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { CartProductType } from "@/app/types/productTypes";
import { toast } from "react-hot-toast";

type ContextType = {
  totalQuantity: number;
  cartProducts: CartProductType[] | null;
  addProduct: (product: CartProductType) => void;
  removeProduct: (product: CartProductType) => void;
};

export const CartContext = createContext<ContextType | null>(null);

interface Props {
  [propName: string]: any;
}

export const CartContextProvider = (props: Props) => {
  const [totalQuantity, setTotalQuantity] = useState(1);
  const [cartProducts, setCartProducts] = useState<CartProductType[] | null>(
    null
  );

  useEffect(() => {
    const cartItems: any = localStorage.getItem("cartItems");
    const cProducts: CartProductType[] | null = JSON.parse(cartItems);
    setCartProducts(cProducts);
  }, []);

  const addProduct = useCallback((product: CartProductType) => {
    setCartProducts((prev) => {
      let updatedCart;

      if (prev) {
        updatedCart = [...prev, product];
      } else {
        updatedCart = [product];
      }

      localStorage.setItem("cartItems", JSON.stringify(updatedCart));
      toast.success("Producto añadido al carrito");
      return updatedCart;
    });
  }, []);

  const removeProduct = useCallback(
    (product: CartProductType) => {
      if (cartProducts) {
        const filteredProducts = cartProducts.filter((item) => {
          return item.id !== product.id;
        });
        setCartProducts(filteredProducts);
        localStorage.setItem("cartItems", JSON.stringify(filteredProducts));
        toast.success("Producto removido del carrito");
        return filteredProducts;
      }
    },
    [cartProducts]
  );

  

  const value = { totalQuantity, cartProducts, addProduct, removeProduct };

  return <CartContext.Provider value={value} {...props} />;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === null) {
    throw new Error("useCart debe usarse con un CartContextProvider");
  }
  return context;
};
