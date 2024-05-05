import { Section } from "@/app/components/Section";
import { ProductDetails } from "@/app/components/product/ProductDetails";
import { products } from "@/app/constants/Products";

type productIdType = {
  productId?: number;
};

const ProductId = ({ params }: { params: productIdType }) => {
  const numberId = Number(params.productId);
  const product = products.find((item) => item.id === numberId);

  return (
    <article className="p-4">
      <Section>
        <ProductDetails product={product}/>
      </Section>
    </article>
  );
};

export default ProductId;
