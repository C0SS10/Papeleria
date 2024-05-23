"use client";

import React, { useState } from "react";
import { CartProductType, ProductCardProps } from "@/app/types/productTypes";
import { truncateText } from "@/app/utils/truncateText";
import { formatPrice } from "@/app/utils/formatPrice";
import Image from "next/image";
import PlusCartIcon from "@/app/icons/PlusCartIcon";
import { useRouter } from "next/navigation";
import { useCart } from "../../../../hooks/useCart";

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addProduct } = useCart();

  const [cartProduct, setCartProduct] = useState<CartProductType>({
    id: product.id,
    title: product.title,
    price: product.price,
    stock: product.stock,
    discountPercentage: product.discountPercentage,
    category: product.category,
    description: product.description,
    thumbnail: product.thumbnail,
    images: product.images,
  });

  const router = useRouter();

  const handleRoute = () => {
    router.push(`/product/${product.id}`);
  };

  return (
    <article className="bg-white col-span-1 rounded-md border-4 border-pistachio-400 border-t-pistachio-600 border-r-pistachio-600 border-b-pistachio-400 border-l-pistachio-400 transition-transform hover:scale-105 text-center ease-in-out mt-2 shadow-lg cursor-pointer">
      <div className="flex flex-col items-center w-full gap-2">
        <div
          className="aspect-square overflow-hidden relative w-full"
          onClick={handleRoute}
        >
          <Image
            fill
            sizes="100%"
            src={product.thumbnail}
            className="w-full h-full object-contain"
            alt={product.title}
          />
        </div>
        <p className="font-semibold text-base m-1 p-1 text-black">
          {truncateText(product.title)}
        </p>
        <p className="text-base font-semibold text-yellow-500">
          {formatPrice(product.price)}
        </p>
        <div className="flex flex-row gap-4 text-base m-2 text-slate-200 justify-center">
          <button className="bg-pistachio-400 font-semibold p-2 shadow-md rounded-sm text-center">
            Comprar
          </button>
          <button
            className="bg-pistachio-400 p-1 shadow-md rounded-sm hover:scale-110 transition-transform ease-in-out"
            onClick={() => {
              addProduct(cartProduct);
            }}
          >
            <PlusCartIcon />
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
