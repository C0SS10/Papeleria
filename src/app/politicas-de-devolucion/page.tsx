import { Section } from "../components/Section";

export default function PoliticaDevolucion() {
  return (
    <Section>
      <div className="m-5 flex justify-center">
        <h1 className="text-4xl font-semibold text-pistachio-400 border-2 border-pistachio-400 shadow-[2px_2px] shadow-yellow-400 rounded-lg inline-block p-4 max-w-min whitespace-nowrap">
          Términos y condiciones de devolución
        </h1>
      </div>
      <header className="pt-2 pb-2 text-2xl font-bold text-pistachio-400">
        <h1>RETRACTO</h1>
      </header>
      <section className="text-pretty">
        <p>
          El <strong>USUARIO</strong> tiene la facultad de ejercer el derecho de
          retracto consagrado en el artículo 47 de la ley 1480 de 2011 en los
          siguientes términos:
        </p>
        <br />
        <p>
          • El <strong>USUARIO</strong> puede retractarse de la compra dentro de
          los cinco (5) días hábiles siguientes al recibo del (los) producto(s)
          adquirido(s) a través de la página web{" "}
          <a
            href="https://www.panamericana.com.co"
            className="text-pistachio-400"
          >
            WWW.PANAMERICANA.COM.CO
          </a>
          .
        </p>
        <br />
        <p>
          • Esta decisión debe darla a conocer a{" "}
          <strong>PANAMERICANA LIBRERÍA Y PAPELERÍA S.A.</strong> dentro de este
          término a través del link de{" "}
          <a href="https://www.panamericana.com.co/contactenos">“PQRS”</a>,
          correo{" "}
          <a href="mailto:tiendavirtual@panamericana.com.co">
            tiendavirtual@panamericana.com.co
          </a>
          , a través de línea telefónica Bogotá y Chía:{" "}
          <strong>364-9333</strong> y desde el resto del país al{" "}
          <strong>01 8000 12 13 14</strong>, línea gratuita desde un fijo. De
          lunes a Lunes a Viernes de <strong>8:30 a. m. a 6:30 p. m.</strong> /
          Sábados de <strong>8:30 a. m. a 4:30 p. m.</strong>
        </p>
        <br />
        <p>
          • El producto debe encontrarse en perfectas condiciones, así como sus
          empaques originales, accesorios, manuales y demás elementos que lo
          conformen o acompañen (sin abrir ni usar).
        </p>
        <br />
        <p>
          • Los gastos de transporte y los demás que conlleve la devolución del
          bien serán cubiertos por el <strong>USUARIO</strong>.
        </p>
        <br />
      </section>
      <section>
        <h2 className="pt-2 pb-2 text-2xl font-bold text-pistachio-400">
          A TENER EN CUENTA
        </h2>
        <p>
          • <strong>Panamericana</strong> NO admite retracto de productos
          descargables (por ejemplo, libros electrónicos, códigos digitales),
          productos que se encuentren abiertos o destapados como es el caso de
          software, productos consumibles para impresión (cartuchos, cintas para
          impresora y tóneres), videojuegos, computadores con instalaciones
          realizadas por el usuario o registro del sistema operativo, medios de
          almacenamiento como discos duros, memorias USB, productos ópticos (CD,
          DVD, Blu-ray), productos con evidencias de instalaciones en sitios
          fijos como televisores en pared, muebles armados.
        </p>
        <br />
        <p>
          • Productos de uso personal (afeitadoras, depiladoras, audífonos,
          artículos de peluquería o belleza, entre otros).
        </p>
        <br />
        <p>
          • <strong>PANAMERICANA LIBRERÍA Y PAPELERÍA S.A.</strong> efectuará la
          devolución del dinero pagado por el producto (menos transporte por
          devolución), acordando y autorizando éste descontar todos los gastos
          que se generen de la devolución de los productos.
        </p>
      </section>
    </Section>
  );
}
