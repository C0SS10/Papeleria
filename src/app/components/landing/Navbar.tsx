import Link from "next/link";
import { Section } from "../Section";
import Logo from "@/app/icons/HomeIcon";
import CartCount from "./CartCount";
import UserMenu from "./UserMenu";
import { getCurrentUser } from "../../../../actions/getCurrentUser";

export default async function Navbar() {
  const user = await getCurrentUser();

  return (
    <section className="sticky top-0 w-full bg-pistachio-400 z-50 shadow-md border-pistachio-900 border-b-2">
      <article className="py-0 text-xl text-slate-100">
        <Section>
          <div className="flex items-center justify-between gap-2 md:gap-0">
            <Link href="/">
              <Logo />
            </Link>
            <nav className="flex items-center gap-8 md:gap-12">
              <CartCount />
              <UserMenu currentUser={user}/>
            </nav>
          </div>
        </Section>
      </article>
    </section>
  );
}
