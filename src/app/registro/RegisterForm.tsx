"use client";

import { useState } from "react";
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import Input from "@/app/components/inputs/Input";
import { RiAccountPinBoxFill } from "react-icons/ri";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

const RegisterForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);
    console.log(data);
    setIsLoading(false);
  };

  return (
    <>
      <h1 className="text-3xl font-bold">Registro de usuario</h1>
      <hr className="bg-slate-200 w-full h-px" />
      <Input
        id="name"
        label="Nombre de usuario"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="email"
        label="Correo electrónico"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        label="Contraseña"
        disabled={isLoading}
        register={register}
        errors={errors}
        type="password"
        required
      />
      <button
        className="bg-transparent font-bold p-2 shadow-sm rounded-sm text-center text-xl w-full text-pistachio-400 hover:bg-pistachio-400 hover:text-slate-200 border-2 border-pistachio-400 transition-colors ease-in"
        onClick={handleSubmit(onSubmit)}
      >
        {isLoading ? "Cargando..." : "Registrarse"}
      </button>
      <button
        className="bg-transparent font-bold p-2 shadow-sm rounded-sm text-center text-xl w-full text-pistachio-400 hover:bg-pistachio-400 hover:text-slate-200 border-2 border-pistachio-400 transition-colors ease-in flex flex-row items-center justify-center gap-2"
        onClick={handleSubmit(onSubmit)}
      >
        <FcGoogle />Registrate usando Google
      </button>
      <p className="flex flex-row items-center justify-center gap-2 text-lg font-bold">
        <RiAccountPinBoxFill className="text-pistachio-900"/> ¿Ya tienes cuenta?
        <Link href="/ingreso" className="hover:underline">Ingresa</Link>
      </p>
    </>
  );
};

export default RegisterForm;
