import React from "react";
import { ProductCardProps } from "@/app/types/productTypes";
import { truncateText } from "@/app/utils/truncateText";
import Image from "next/image";
import { formatPrice } from "@/app/utils/formatPrice";

const ProductCard: React.FC<ProductCardProps> = ({
  product
}) => {
  return (
    <article className="bg-slate-100 col-span-1 cursor-pointer rounded-md shadow-[4px_4px_2px_1px] transition-transform hover:scale-105 text-center text-sm shadow-pistachio-400">
      <div className="flex flex-col items-center w-full gap-2">
        <div className="aspect-square overflow-hidden relative w-full">
          <Image
            fill
            src={product.thumbnail}
            className="w-full h-full object-contain"
            alt={product.title}
          />
        </div>
        <p className="font-semibold text-base m-1 p-1">
          {truncateText(product.title)}
        </p>
        <p className="text-base font-semibold text-yellow-600">
          {formatPrice(product.price)}
        </p>
        <div>
          <button>Add to cart</button>
          <button>Buy now</button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
