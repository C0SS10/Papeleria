interface ProductData {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  description: string;
  images: string[];
}

export interface ProductCardProps {
  product: ProductData
}