import { Section } from "../components/Section";
import ContactForm from "./ContactForm";

export default function Contactanos() {
  return (
    <Section>
      <div className="mx-full flex flex-row m-4">
        <div className="flex flex-col justify-center w-full md:w-1/3">
          <h2 className="text-3xl font-bold text-center mb-4 border-b-2 border-pistachio-400">CONTÁCTANOS</h2>
          <p className="text-center mb-8">
            Si tienes alguna petición, queja o reclamo en la que podamos
            ayudarte, contáctanos a través de nuestra línea de atención o
            diligenciando el siguiente formulario:
          </p>
        </div>
        <div className="flex flex-col items-center justify-center w-full md:w-2/3">
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
