interface ProductData {
  id: number;
  title: string;
  price: number;
  stock: number;
  maxStock: number;
  discountPercentage: number;
  category: string;
  thumbnail: string;
  description: string;
  images: string[];
}

export interface ProductCardProps {
  product: ProductData
}

export type CartProductType ={
  id: number;
  title: string;
  price: number;
  stock: number;
  maxStock: number;
  discountPercentage: number;
  category: string;
  description: string;
  thumbnail: string;
  images: string[];
};