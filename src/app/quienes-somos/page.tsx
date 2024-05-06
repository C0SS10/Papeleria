import { Section } from "../components/Section";

export default function QuienesSomos() {
  return (
    <Section>
      <div className="m-5 flex justify-center">
        <h1 className="text-4xl font-semibold text-pistachio-400 border-2 border-pistachio-400 shadow-[2px_2px] shadow-yellow-400 rounded-lg inline-block p-4 max-w-min whitespace-nowrap">
          ¿Quienes somos?
        </h1>
      </div>
      <div className="w-full">
        <iframe
          className="object-contain aspect-video"
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/AcdKNTrbXUk?autoplay=1"
          title="YouTube video player"
          allowFullScreen
        ></iframe>
      </div>
      <div className="text-pretty mt-4">
        <p>
          En el año de 1964, Panamericana abre su primer almacén en la ciudad de
          Bogotá bajo el concepto de librería. Luego de unos años en el mercado
          y respondiendo a las necesidades de sus clientes, incluye en su
          portafolio de productos papelería de oficina y escolar, además de
          líneas como Tecnología, Mobiliario, Arte, Decoración y Juguetería.
          Como una Empresa consolidada y conocedora de su negocio, Panamericana
          comienza a afianzarse y expandirse por las diferentes zonas de Bogotá
          con 23 tiendas, y en 2006 emprende su expansión por el territorio
          nacional, llegando a ciudades como{" "}
          <strong>
            Neiva, Villavicencio, Barranquilla, Medellín, Cúcuta, Cartagena,
            Valledupar, Manizales, Pereira, Ibagué, Cali, Montería, Bucaramanga,
            Santa Marta y nuestra Tienda Virtual
          </strong>{" "}
          .
        </p>
        <br />
        <p>
          Hoy Panamericana es una gran cadena conformada por 39 tiendas a nivel
          nacional, que con más de 2.000 empleados directos, 300 temporales en
          promedio y 500 indirectos constituye un gran aporte al progreso de
          nuestro país.
        </p>
        <br />
        <p>
          Nuestro propósito día a día es dar a nuestros clientes un mejor
          servicio a través de la atención personalizada, asesoría en la compra
          y uso de productos por parte de nuestro personal calificado y
          capacitado permanentemente. Todo esto, sumado a la facilidad de poder
          encontrar todo en un solo lugar, cerca al hogar y a la oficina, hace
          que nuestros clientes prefieran ir a Panamericana.
        </p>
        <br />
        <p>
          Para alcanzar la excelencia en el servicio y generar espacios cómodos
          y confortables, construimos mundos infantiles, donde niños y niñas
          viven experiencias fascinantes, al tiempo que desarrollan y afianzan
          el hábito de la lectura. Todo esto y más nos permite brindar la mejor
          experiencia de compra a nuestros clientes y público en general, y
          poderles ofrecer un gran portafolio de productos en un solo lugar; por
          eso, nuestro eslogan de marca es `El lugar para darse gusto`.
        </p>
      </div>
    </Section>
  );
}
