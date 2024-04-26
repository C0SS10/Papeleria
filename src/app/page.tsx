import HomeBanner from "@/app/components/HomeBanner";
import { Section } from "@/app/components/Section";
import { products } from "@/app/constants/products";
import { truncateText } from "@/app/utils/truncateText";

export default function Home() {
  return (
    <div className="p-4">
      <Section>
        <div>
          <HomeBanner />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {
            products.map((product: any) => {
              return (
                <div key={product.id}>
                  {truncateText(product.title)}
                </div>
              )
            })
          }
        </div>
      </Section>
    </div>
  );
}
