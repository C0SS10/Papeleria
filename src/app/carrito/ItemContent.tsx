"use client";

import { CartProductType } from "@/app/types/productTypes";
import { formatPrice } from "@/app/utils/formatPrice";
import Link from "next/link";
import { truncateText } from "@/app/utils/truncateText";
import Image from "next/image";
import { ProductQuantity } from "@/app/components/product/ProductQuantity";
import { useCart } from "../../../hooks/useCart";

interface ItemContentProps {
  item: CartProductType;
}

const ItemContent: React.FC<ItemContentProps> = ({ item }) => {
  const {removeProduct, quantityIncrease, quantityDecrease} = useCart();

  return (
    <section className="grid grid-cols-5 text-xs md:text-sm gap-4 border-2 border-slate-200 py-2 items-center">
      <div className="col-span-2 justify-self-start flex gap-2 md:gap-4">
        <Link href={`/product/${item.id}`}>
          <div className="relative w-20 aspect-square">
            <Image
              fill
              sizes="100%"
              alt={item.title}
              src={item.thumbnail}
              className="object-contain"
            />
          </div>
        </Link>
        <div className="flex flex-col justify-between">
          <Link href={`/product/${item.id}`}>{truncateText(item.title)}</Link>
          <div>Descuento: {item.discountPercentage}%</div>
          <div className="w-20">
            <button
              className="font-semibold p-2 shadow-md rounded-sm text-center text-sm text-pistachio-400 hover:underline"
              onClick={() => removeProduct(item)}
            >
              Quitar
            </button>
          </div>
        </div>
      </div>
      <div className="justify-self-center text-lg font-bold">
        {formatPrice(item.price)}
      </div>
      <div className="justify-self-center text-lg font-bold">
        <ProductQuantity
          cartCounter={true}
          cartProduct={item}
          quantityIncrease={() => {quantityIncrease(item)}}
          quantityDecrease={() => {quantityDecrease(item)}}
        />
      </div>
      <div className="justify-self-end text-lg font-bold pr-2">
        {formatPrice(item.price * item.stock)}
      </div>
    </section>
  );
};

export default ItemContent;
