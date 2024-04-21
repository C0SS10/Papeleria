import Link from "next/link";
import { Section } from "./Section";

export default function Navbar() {
  return (
    <section className="sticky top-0 w-full bg-pistachio-200 z-8 shadow-md border-pistachio-900 border-b-2">
      <article className="py-2 text-xl">
        <Section >
          <div className="flex items-center justify-between gap-2 md:gap-0">
            <Link href="/">Inicio</Link>
            <div className="hidden md:block">Busqueda</div>
            <nav className="flex items-center gap-8 md:gap-12">
              <div>Carrito</div>
              <div>Menu</div>
            </nav>
          </div>
        </Section>
      </article>
    </section>
  );
}
