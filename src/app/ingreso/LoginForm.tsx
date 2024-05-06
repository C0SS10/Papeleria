"use client";

import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Input from "../components/inputs/Input";
import { FcGoogle } from "react-icons/fc";
import { RiAccountPinBoxFill } from "react-icons/ri";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const router = useRouter();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);
    signIn("credentials", {
      ...data,
      redirect: false,
    }).then((callback) => {
      if (callback?.ok) {
        router.push("/carrito");
        router.refresh();
        toast.success("¡Bienvenido!");
      }

      if (callback?.error) {
        toast.error(callback.error);
      }
      setIsLoading(false);
    });
  };

  return (
    <>
      <h1 className="text-3xl font-bold">Ingreso a la tienda</h1>
      <hr className="bg-slate-200 w-full h-px" />
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
        {isLoading ? "Cargando..." : "Ingresar"}
      </button>
      <button
        className="bg-transparent font-bold p-2 shadow-sm rounded-sm text-center text-xl w-full text-pistachio-400 hover:bg-pistachio-400 hover:text-slate-200 border-2 border-pistachio-400 transition-colors ease-in flex flex-row items-center justify-center gap-2"
        onClick={handleSubmit(onSubmit)}
      >
        <FcGoogle />
        Ingresa usando Google
      </button>
      <p className="flex flex-row items-center justify-center gap-2 text-lg font-bold">
        <RiAccountPinBoxFill className="text-pistachio-900" /> ¿Te has olvidado
        de tu contraseña?
        <Link href="/recuperar" className="hover:underline">
          Recupérala.
        </Link>
      </p>
      <p className="flex flex-row items-center justify-center gap-2 text-lg font-bold">
        <RiAccountPinBoxFill className="text-pistachio-900" /> ¿No tienes
        cuenta?
        <Link href="/ingreso" className="hover:underline">
          Regístrate.
        </Link>
      </p>
    </>
  );
};

export default LoginForm;
