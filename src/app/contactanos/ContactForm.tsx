"use client";

import { useState } from "react";
import { isValidPhone, isValidEmail } from "@/app/utils/validatorContact";
import toast from "react-hot-toast";

interface FormErrors {
  nombre?: string;
  correo?: string;
  telefono?: string;
  ciudad?: string;
}

const validCities = [
  "Bogotá",
  "Soacha",
  "Barranquilla",
  "Bucaramanga",
  "Cali",
  "Cartagena",
  "Chía",
  "Cúcuta",
  "Ibagué",
  "Manizales",
  "Medellín",
  "Montería",
  "Neiva",
  "Pereira",
  "Santa Marta",
  "Valledupar",
  "Villavicencio",
];

const ContactForm = ({}) => {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    ciudad: "",
    comentarios: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = () => {
    let formErrors: FormErrors = {};
    let hasError = false;

    if (!isValidEmail(formData.correo)) {
      formErrors = { ...formErrors, correo: "Correo inválido" };
      hasError = true;
    }

    if (!isValidPhone(formData.telefono)) {
      formErrors = { ...formErrors, telefono: "Número de teléfono inválido" };
      hasError = true;
    }

    setErrors(formErrors);
    return !hasError;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      toast.success("Formulario enviado");
      setFormData({
        nombre: "",
        correo: "",
        telefono: "",
        ciudad: "",
        comentarios: "",
      });
    } else {
      toast.error("Por favor, verifica los campos del formulario");
    }
  };

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit} className="w-2/4 flex flex-col gap-4">
      <div className="w-full relative">
        <input
          autoComplete="off"
          id="nombre"
          name="nombre"
          placeholder=""
          type="text"
          required
          className="peer w-full p-4 pt-6 outline-none bg-white font-medium border-2 rounded-md transition border-slate-200 focus:border-pistachio-400"
          onChange={handleChange}
        />
        <label
          htmlFor="nombre"
          className="absolute cursor-text text-md text-slate-500 duration-150 transform -translate-y-3 top-5 z-10 origin-[0] left-4"
        >
          Nombre completo
        </label>
      </div>
      <div className="w-full relative">
        <input
          autoComplete="off"
          id="correo"
          name="correo"
          placeholder=""
          type="email"
          value={formData.correo}
          onChange={handleChange}
          required
          className={`peer w-full p-4 pt-6 outline-none bg-white font-medium border-2 rounded-md transition border-slate-200 focus:border-pistachio-400 ${
            errors.correo
              ? "border-red-500"
              : "border-slate-200 focus:border-pistachio-400"
          }`}
        />
        <label
          htmlFor="correo"
          className="absolute cursor-text text-md text-slate-500 duration-150 transform -translate-y-3 top-5 z-10 origin-[0] left-4"
        >
          {errors.correo ? (
            <p className="text-red-500 text-sm">{errors.correo}</p>
          ) : (
            "Correo"
          )}
        </label>
      </div>
      <div className="w-full relative">
        <input
          autoComplete="off"
          id="telefono"
          name="telefono"
          placeholder=""
          type="tel"
          pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
          value={formData.telefono}
          onChange={handleChange}
          required
          className={`peer w-full p-4 pt-6 outline-none bg-white font-medium border-2 rounded-md transition border-slate-200 focus:border-pistachio-400 ${
            errors.telefono
              ? "border-red-500"
              : "border-slate-200 focus:border-pistachio-400"
          }`}
        />
        <label
          htmlFor="telefono"
          className="absolute cursor-text text-md text-slate-500 duration-150 transform -translate-y-3 top-5 z-10 origin-[0] left-4"
        >
          {errors.telefono ? (
            <p className="text-red-500 text-sm">{errors.telefono}</p>
          ) : (
            "Teléfono"
          )}
        </label>
      </div>
      <div className="w-full relative">
        <select
          id="ciudad"
          name="ciudad"
          onChange={handleChange}
          required
          className={`peer w-full p-4 pt-6 outline-none bg-white font-medium border-2 rounded-md transition border-slate-200 focus:border-pistachio-400 ${
            errors.ciudad
              ? "border-red-500"
              : "border-slate-200 focus:border-pistachio-400"
          }`}
        >
          <option value="" disabled hidden>
            Selecciona una ciudad
          </option>
          {validCities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
        <label
          htmlFor="ciudad"
          className="absolute cursor-text text-md text-slate-500 duration-150 transform -translate-y-3 top-5 z-10 origin-[0] left-4"
        >
          {errors.ciudad ? (
            <p className="text-red-500 text-sm">{errors.ciudad}</p>
          ) : (
            "Ciudad"
          )}
        </label>
      </div>
      <textarea
        name="comentarios"
        id="area-comentario"
        placeholder="Comentario"
        required
        className="w-full p-2 outline-none bg-white font-medium border-2 rounded-md transition border-slate-200 focus:border-pistachio-400 resize-none min-h-32"
      />
      <button
        type="submit"
        className="bg-transparent hover:bg-pistachio-400 hover:text-pistachio-50 border-2 border-pistachio-400 text-black font-bold py-2 px-4 rounded mt-4 text-xl"
      >
        Enviar
      </button>
    </form>
  );
};

export default ContactForm;
