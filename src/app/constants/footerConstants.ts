export interface ListType {
  text: string;
  href?: string;
}

export const contactList: ListType[] = [
  { text: "Teléfono oficina: (601) 364 9000" },
  { text: "Servicio al cliente: (601) 364 9333" },
  { text: "Tiendavirtual@panamericana.com.co", href: "mailto:" },
  { text: "Servicliente@panamericana.com.co", href: "mailto:" },
  { text: "Quejas y reclamos", href: "/contactanos" },
];

export const aboutList: ListType[] = [
  { text: "¿Quiénes somos?", href: "/quienes-somos" },
  { text: "Trabaja con nosotros", href: "https://www.panamericana.com.co/links-interes/trabaje-con-nosotros" },
  { text: "Centro Cultural", href: "https://www.panamericana.com.co/centro-cultural-y-empresarial" },
  { text: "Nuestras tiendas", href: "https://www.panamericana.com.co/nuestras-tiendas" },
];

export const policiesList: ListType[] = [
  { text: "Tratamiendo de datos", href: "/habeas-data" },
  { text: "Aviso de privacidad" },
  { text: "Políticas de devolución", href: "/politicas-de-devolucion" },
  { text: "Política de cookies" },
  { text: "SIC", href: "https://www.sic.gov.co/" },
];