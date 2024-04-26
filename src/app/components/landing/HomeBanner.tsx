import Image from "next/image";

export default function HomeBanner() {
  return (
    <div className="relative bg-gradient-to-l from-pistachio-400 to-pistachio-600 mb-4 rounded-md shadow-yellow-500 shadow-[6px_6px]">
      <div className="mx-auto px-2 py-8 flex flex-col gap-1 md:flex-row items-center justify-evenly">
        <div className="mb-8 md:mb-0 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-200 mb-4">
            ¡Descuentos electrónicos!
          </h1>
          <p className="text-lg md:texl-xl text-slate-200 mb-2">
            Disfruta de descuentos en productos seleccionados
          </p>
          <p className="text-2xl md:text-4xl text-yellow-500 font-bold">
            44% DE DESCUENTO
          </p>
        </div>
        <div className="w-1/3 relative aspect-video">
          <Image
            src="/banner.webp"
            fill
            alt="Banner imagen"
            className="object-contain"
            sizes="100%"
            priority
          />
        </div>
      </div>
    </div>
  );
}
