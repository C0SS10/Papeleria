"use client";

import MoneyIcon from "@/app/icons/MoneyIcon";
import PlusCartIcon from "@/app/icons/PlusCartIcon";
import { formatPrice } from "@/app/utils/formatPrice";

interface ProductDetailsProps {
  product: any;
}

export const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>Images</div>
      <div className="flex flex-col gap-8">
        <section className="flex flex-row gap-8">
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
            {product.discountPercentage !== 0 ? product.discountPercentage+"%" : "No tiene descuento" }
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
        <p className="text-lg text-gray-500">{product.description}</p>
        <div>
          <span className="text-3xl font-semibold text-black">
            {formatPrice(product.price)}
          </span>
          <span className="text-xl font-semibold text-gray-500"> COP</span>
        </div>
        <div className="flex flex-col gap-2 md:flex-row justify-evenly">
          <button className="flex flex-row gap-1 bg-pistachio-400 p-2 text-slate-200 rounded-md">
            <MoneyIcon />
            Comprar ahora
          </button>
          <button className="flex flex-row gap-1 bg-pistachio-400 p-2 text-slate-200 rounded-md">
            <PlusCartIcon />
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};
