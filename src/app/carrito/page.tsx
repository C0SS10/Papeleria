import { Section } from "@/app/components/Section";
import CartClient from "@/app/carrito/CartClient";

const Cart = () => {
  return (
    <section className="pt-8">
      <Section>
        <CartClient />
      </Section>
    </section>
  );
};

export default Cart;