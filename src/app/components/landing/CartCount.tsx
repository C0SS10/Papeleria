"use client";

import { useCart } from "../../../../hooks/useCart";
import { useRouter } from "next/navigation";
import { CiShoppingCart } from "react-icons/ci";

const CartCount = () => {
  const { totalQuantity } = useCart();
  const router = useRouter();

  return (
    <div className="relative cursor-pointer" onClick={() => router.push("/carrito")}>
      <div className="text-4xl">
        <CiShoppingCart />
      </div>

      <span className="absolute -top-2 -right-2 bg-slate-200 text-pistachio-400 h-6 w-6 rounded-full flex items-center justify-center text-sm font-bold">
        {totalQuantity}
      </span>
    </div>
  );
};

export default CartCount;
