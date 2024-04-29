"use client";

import { CartProductType } from "@/app/types/productTypes";
import Image from "next/image";
import { useState } from "react";

interface ProductImagesProps {
  cartProduct: CartProductType;
  product: any;
  handleImage: (value: string) => void;
}

export const ProductImages: React.FC<ProductImagesProps> = ({
  cartProduct,
  product,
  handleImage,
}) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

  const handleSelectImage = (imageUrl: string, index: number) => {
    setSelectedImageIndex(index);
    handleImage(imageUrl);
  };

  return (
    <div className="grid grid-cols-6 gap-2 h-full max-h-[600px] min-h-[400px] sm:min-h-[500px] mt-6">
      <div className="flex flex-col items-center justify-center gap-4 cursor-pointer h-full max-h-[400px] min-h-[200px] sm:min-h-[300px]">
        {product.images.map((image: string, index: number) => {
          return (
            <div
              key={product.id}
              onClick={() => handleSelectImage(image, index)}
              className={`relative w-[100%] aspect-square rounded-sm border-pistachio-400 ${
                selectedImageIndex === index ? "border-2" : "border-none"
              }`}
            >
              <Image
                src={image}
                alt={product.title}
                fill
                sizes="100%"
                className="object-contain"
                priority
              />
            </div>
          );
        })}
      </div>
      <div className="col-span-5 relative aspect-square">
        <Image
          fill
          src={cartProduct.images[selectedImageIndex]}
          alt={cartProduct.title}
          className="object-contain max-h-[500px] min-h-[300px] sm:min-h-[400px] "
        />
      </div>
    </div>
  );
};
