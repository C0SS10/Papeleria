"use client";

import Link from "next/link";
import { useCart } from "@/app/hooks/useCart";
import { MdArrowBack } from "react-icons/md";
import ItemContent from "./ItemContent";
import { FaShoppingCart } from "react-icons/fa";

const CartClient = () => {
  const { cartProducts } = useCart();

  if (!cartProducts || cartProducts.length === 0) {
    return (
      <div className="flex flex-col items-center">
        <div className="text-2xl">
          <h1>Tu carrito está vacio</h1>
          <div>
            <Link
              href={"/"}
              className="text-slate-600 flex items-center gap-1 mt-2"
            >
              <MdArrowBack />
              <span>Agrega productos</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <p className="flex flex-col items-center text-center text-pistachio-400 font-bold">
        <FaShoppingCart className="text-6xl border-2 border-pistachio-400 p-1 rounded-md shadow-[2px_2px] shadow-yellow-400" />
      </p>
      <section className="grid grid-cols-5 text-lg font-bold gap-4 pb-2 items-center mt-4">
        <div className="col-span-2 justify-self-start">PRODUCTO</div>
        <div className="justify-self-center">PRECIO</div>
        <div className="justify-self-center">CANTIDAD</div>
        <div className="justify-self-end">TOTAL</div>
      </section>
      <section>
        {cartProducts &&
          cartProducts.map((item) => {
            return <ItemContent key={item.id} item={item} />;
          })}
      </section>
      <section className="border-t-2 border-pistachio-400 py-2 flex justify-between gap-2">
        <div className="w-22">
          <button
            className="bg-pistachio-400 font-semibold p-2 shadow-md rounded-sm text-center text-sm text-slate-100 hover:bg-transparent hover:text-pistachio-400 border-2 border-pistachio-400 transition-colors ease-in"
            onClick={() => {}}
          >
            Limpiar carrito
          </button>
        </div>
        <div className="text-sm flex flex-col gap-1 items-start">
          <p className="flex justify-between w-full text-base font-semibold">
            <span>Subtotal</span>
            <span>$10000</span>
          </p>
          <p className="text-slate-400">
            El IVA se agrega cuando vayas a pagar
          </p>
          <button
            className="bg-pistachio-400 font-semibold p-1 shadow-sm rounded-sm text-center text-lg w-full text-slate-100 hover:bg-transparent hover:text-pistachio-400 border-2 border-pistachio-400 transition-colors ease-in"
            onClick={() => {}}
          >
            Pagar
          </button>
          <Link href={"/"} className="text-black flex items-center gap-1 mt-2">
            <MdArrowBack />
            <span>Continuar comprando</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CartClient;
