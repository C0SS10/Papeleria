import HomeBanner from "@/app/components/landing/HomeBanner";
import { Section } from "@/app/components/Section";
import ProductList from "@/app/components/product/ProductList";

export default function Home() {
  return (
    <div className="p-4">
      <Section>
        <div>
          <HomeBanner />
        </div>
        <ProductList />
      </Section>
    </div>
  );
}
