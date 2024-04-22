import Link from "next/link";
import { FooterList } from "./FooterList";
import { Section } from "./Section";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

interface ListType {
  text: string;
  href?: string;
}

const contactList: ListType[] = [
  { text: "Teléfono oficina: (601) 364 9000" },
  { text: "Servicio al cliente: (601) 364 9333" },
  { text: "Tiendavirtual@panamericana.com.co", href: "mailto:" },
  { text: "Servicliente@panamericana.com.co", href: "mailto:" },
  { text: "Calle 12 #34-30, Bogotá D.C." },
];

const aboutList: ListType[] = [
  { text: "¿Quiénes somos?", href: "/quienes-somos" },
  {
    text: "Trabaja con nosotros",
    href: "https://www.panamericana.com.co/links-interes/trabaje-con-nosotros",
  },
  {
    text: "Centro Cultural",
    href: "https://www.panamericana.com.co/centro-cultural-y-empresarial",
  },
  {
    text: "Nuestras tiendas",
    href: "https://www.panamericana.com.co/nuestras-tiendas",
  },
];

const policiesList: ListType[] = [
  { text: "Tratamiendo de datos", href: "/habeas-data" },
  { text: "Aviso de privacidad" },
  { text: "Políticas de devolución", href: "/politicas-de-devolucion" },
  { text: "Política de cookies" },
  { text: "SIC", href: "https://www.sic.gov.co/" },
];

export default function Footer() {
  return (
    <footer className="bg-pistachio-400 text-slate-100 text-md mt-8 shadow-md border-pistachio-900 border-t-2">
      <Section>
        <div className="flex flex-col md:flex-row justify-between pt-4 pb-4">
          <FooterList>
            <h3 className="text-pistachio-200 text-lg font-extrabold mb-2">
              CONTÁCTENOS
            </h3>
            {contactList.map((item, index) => (
              <>
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
              </>
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
              <>
                {item.href ? (
                  <Link
                    key={index}
                    href={`${item.href}${item.text}`}
                    className="hover:underline text-base"
                  >
                    {item.text}
                  </Link>
                ) : (
                  <p key={index} className="text-base">
                    {item.text}
                  </p>
                )}
              </>
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
      </Section>
    </footer>
  );
}
