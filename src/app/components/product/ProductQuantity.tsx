"use client";

import MinusIcon from "@/app/icons/MinusIcon";
import PlusIcon from "@/app/icons/PlusIcon";
import { CartProductType } from "@/app/types/productTypes";

interface QuantityProps {
  cartCounter?: boolean;
  cartProduct: CartProductType;
  quantityIncrease: () => void;
  quantityDecrease: () => void;
}

const btnStyle =
  "border-2 text-xl border-pistachio-400 px-2 rounded-md shadow-[2px_2px] shadow-yellow-500";

export const ProductQuantity: React.FC<QuantityProps> = ({
  cartProduct,
  cartCounter,
  quantityIncrease,
  quantityDecrease,
}) => {
  return (
    <div className="flex gap-2 items-center text-black justify-center flex-col">
      {cartCounter ? null : (
        <div className="font-semibold text-lg">CANTIDAD </div>
      )}
      <div className="flex gap-8 items-center text-base">
        <button onClick={quantityDecrease} className={btnStyle}>
          <MinusIcon />
        </button>
        <p className="text-xl font-bold">{cartProduct.stock}</p>
        <button onClick={quantityIncrease} className={btnStyle}>
          <PlusIcon />
        </button>
      </div>
    </div>
  );
};
