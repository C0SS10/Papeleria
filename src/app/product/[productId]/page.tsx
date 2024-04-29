import { Section } from "@/app/components/Section";
import { ProductDetails } from "@/app/components/product/ProductDetails";
import { productTest } from "@/app/utils/productTest";

interface ProductParams {
  productId?: string;
}

const ProductId = ({ params }: { params: ProductParams }) => {
  return (
    <article className="p-4">
      <Section>
        <ProductDetails product={productTest}/>
      </Section>
    </article>
  );
};

export default ProductId;
