import Link from "next/link";
import { FooterList } from "@/app/components/footer/FooterList";
import { Section } from "@/app/components/Section";
import { contactList, aboutList, policiesList } from "@/app/constants/footerConstants";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-pistachio-400 text-slate-100 text-md mt-8 shadow-md border-pistachio-900 border-t-2">
      <Section>
        <div className="flex flex-col md:flex-row justify-between pt-4 pb-4 sm:flex-row sm:gap-2 md:gap-10">
          <FooterList>
            <h3 className="text-pistachio-200 text-lg font-extrabold mb-2">
              CONTÁCTENOS
            </h3>
            {contactList.map((item, index) => (
              <div key={index}>
                {item.href ? (
                  <a
                    key={index}
                    href={`${item.href}${item.text}`}
                    className="hover:underline text-base"
                  >
                    {item.text}
                  </a>
                ) : (
                  <p key={index} className="text-base">
                    {item.text}
                  </p>
                )}
              </div>
            ))}
          </FooterList>
          <FooterList>
            <h3 className="text-pistachio-200 text-lg font-extrabold mb-2">
              CONÓCENOS
            </h3>
            {aboutList.map((item, index) => {
              return (
                <Link
                  key={index}
                  href={`${item.href}`}
                  className="hover:underline text-base"
                >
                  {item.text}
                </Link>
              );
            })}
          </FooterList>
          <FooterList>
            <h3 className="text-pistachio-200 text-lg font-extrabold mb-2">
              POLÍTICAS
            </h3>
            {policiesList.map((item, index) => (
              <div key={index}>
                {item.href ? (
                  <Link
                    key={index}
                    href={`${item.href}`}
                    className="hover:underline text-base"
                  >
                    {item.text}
                  </Link>
                ) : (
                  <p key={index} className="text-base">
                    {item.text}
                  </p>
                )}
              </div>
            ))}
          </FooterList>
          <FooterList>
            <h3 className="text-pistachio-200 text-lg font-extrabold mb-2">
              SÍGUENOS
            </h3>
            <div className="flex flex-row gap-2">
              <Link
                href="https://es-la.facebook.com/Panamericana/"
                className="text-xl hover:scale-125 ease-in transition-transform"
              >
                <FaFacebook />
              </Link>
              <Link
                href="https://www.instagram.com/panamericana/?hl=es"
                className="text-xl hover:scale-125 ease-in transition-transform"
              >
                <FaInstagram />
              </Link>
              <Link
                href="https://twitter.com/panamericanalib"
                className="text-xl hover:scale-125 ease-in transition-transform"
              >
                <FaTwitter />
              </Link>
              <Link
                href="https://www.youtube.com/channel/UC99eMX0xxAO-Iv9WPLDJyhg"
                className="text-xl hover:scale-125 ease-in transition-transform"
              >
                <FaYoutube />
              </Link>
            </div>
          </FooterList>
        </div>
        <p className="text-center text-sm">©️ Página hecha por: Esteban Cossio Gonzalez | Fundamentos de Sistemas | UdeA</p>
      </Section>
    </footer>
  );
}
