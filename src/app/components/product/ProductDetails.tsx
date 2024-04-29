"use client";

import { useCallback, useEffect, useState } from "react";
import MoneyIcon from "@/app/icons/MoneyIcon";
import PlusCartIcon from "@/app/icons/PlusCartIcon";
import { formatPrice } from "@/app/utils/formatPrice";
import { CartProductType } from "@/app/types/productTypes";
import { ProductQuantity } from "@/app/components/product/ProductQuantity";
import { ProductImages } from "@/app/components/product/ProductImages";
import { useCart } from "@/app/hooks/useCart";
import { MdCheckCircle } from "react-icons/md";

interface ProductDetailsProps {
  product: any;
}

export const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const { handleAddProduct, cartProducts } = useCart();
  const [isProductInCart, setIsProductInCart] = useState<boolean>(false);

  const [cartProduct, setCartProduct] = useState<CartProductType>({
    id: product.id,
    title: product.title,
    price: product.price,
    stock: product.stock,
    maxStock: product.maxStock,
    discountPercentage: product.discountPercentage,
    category: product.category,
    description: product.description,
    thumbnail: product.thumbnail,
    images: product.images,
  });

  useEffect(() => {
    setIsProductInCart(false);

    if (cartProduct) {
      const existingIndex = cartProducts?.findIndex(
        (item) => item.id === product.id
      );
      if (existingIndex !== undefined && existingIndex > -1) {
        setIsProductInCart(true);
      }
    }
  }, [cartProducts, cartProduct, product.id]);

  const quantityIncrease = useCallback(() => {
    setCartProduct((prev) => {
      const newStock = Math.min(prev.stock + 1, prev.maxStock);
      const newQuantity = Math.max(newStock, 1);
      return { ...prev, stock: newQuantity };
    });
  }, []);

  const quantityDecrease = useCallback(() => {
    setCartProduct((prev) => {
      const newStock = Math.min(prev.stock - 1, prev.stock);
      const newQuantity = Math.max(newStock, 1);
      return { ...prev, stock: newQuantity };
    });
  }, []);

  const handleImage = useCallback((value: string) => {
    setCartProduct((prev) => {
      return { ...prev, selectedImage: value };
    });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
      <ProductImages
        cartProduct={cartProduct}
        product={product}
        handleImage={handleImage}
      />
      <div className="flex flex-col gap-8">
        <section className="flex flex-row gap-8 justify-between">
          <p className="text-yellow-500 text-2xl font-semibold">
            <strong className="text-black text-lg font-medium">
              Existencias:
            </strong>{" "}
            {product.stock !== 0 ? product.stock : "Agotadas"}
          </p>
          <p className="text-yellow-500 text-2xl font-semibold">
            <strong className="text-black text-lg font-medium">
              Descuento:
            </strong>{" "}
            {product.discountPercentage !== 0
              ? product.discountPercentage + "%"
              : "No tiene descuento"}
          </p>
        </section>
        <div>
          <h1 className="text-3xl font-semibold text-black mb-2">
            {product.title}
          </h1>
          <div className="text-sm text-center rounded-md bg-pistachio-400 text-slate-200 inline-block p-1 max-w-min">
            <span>{product.category}</span>
          </div>
        </div>
        <p className="text-lg text-gray-500 text-justify">
          {product.description}
        </p>
        <div>
          <span className="text-3xl font-semibold text-black">
            {formatPrice(product.price)}
          </span>
          <span className="text-xl font-semibold text-gray-500"> COP</span>
        </div>
        <ProductQuantity
          cartProduct={cartProduct}
          quantityIncrease={quantityIncrease}
          quantityDecrease={quantityDecrease}
        />
        <div className="flex flex-col gap-2 md:flex-row justify-evenly">
          <button className="flex flex-row gap-1 bg-pistachio-400 p-2 text-slate-200 rounded-md">
            <MoneyIcon />
            Comprar ahora
          </button>
          {isProductInCart ? (
            <>
              <p className="mb-2 text-slate-600 flex items-center gap-1">
                <MdCheckCircle className="text-pistachio-400" size={20}/>
                <span>El producto está en el carrito</span>
              </p>
            </>
          ) : (
            <>
              <button
                className="flex flex-row gap-1 bg-pistachio-400 p-2 text-slate-200 rounded-md"
                onClick={() => {
                  handleAddProduct(cartProduct);
                }}
              >
                <PlusCartIcon />
                Agregar al carrito
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
