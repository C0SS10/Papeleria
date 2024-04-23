import HomeBanner from "@/app/components/HomeBanner";
import { Section } from "@/app/components/Section";

export default function Home() {
  return (
    <div className="p-4">
      <Section>
        <div>
          <HomeBanner />
        </div>
      </Section>
    </div>
  );
}
