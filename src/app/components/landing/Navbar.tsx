import Link from "next/link";
import { Section } from "../Section";
import Logo from "@/app/icons/HomeIcon";
import CartCount from "./CartCount";
import UserMenu from "./UserMenu";

export default function Navbar() {
  return (
    <section className="sticky top-0 w-full bg-pistachio-400 z-50 shadow-md border-pistachio-900 border-b-2">
      <article className="py-0 text-xl text-slate-100">
        <Section>
          <div className="flex items-center justify-between gap-2 md:gap-0">
            <Link href="/">
              <Logo />
            </Link>
            <div className="hidden md:block">Busqueda</div>
            <nav className="flex items-center gap-8 md:gap-12">
              <CartCount />
              <UserMenu />
            </nav>
          </div>
        </Section>
      </article>
    </section>
  );
}
