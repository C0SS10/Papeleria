import { products } from "@/app/constants/products";
import ProductCard from "@/app/components/product/ProductCard";

export default function ProductList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {products.map((product: any) => {
        return (
          <ProductCard key={product.id} product={product} />
        );
      })}
    </div>
  );
}
