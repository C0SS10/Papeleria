"use client";

import { useEffect, useState } from "react";
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import Input from "@/app/components/inputs/Input";
import { RiAccountPinBoxFill } from "react-icons/ri";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { SafeUser } from "@/app/types/userTypes";
import { AiFillAlert } from "react-icons/ai";

interface RegisterFormProps {
  currentUser: SafeUser | null;
}

const RegisterForm: React.FC<RegisterFormProps> = ({currentUser}) => {
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

  const router = useRouter();

  useEffect(() => {
    if (currentUser) {
      router.push("/");
      router.refresh();
    }
  }, [currentUser, router]);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);
    axios
      .post("/api/registro", data)
      .then((response) => {
        toast.success("¡Cuenta creada!");
        signIn("credentials", {
          email: data.email,
          password: data.password,
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
        });
      })
      .catch(() => {
        toast.error("Error al crear la cuenta");
      })
      .finally(() => setIsLoading(false));
  };

  if (currentUser) {
    return(
      <div className="flex flex-col items-center justify-center pt-4 gap-4 last:pt-12">
        <AiFillAlert className="text-6xl text-red-600"/>
        <h1 className="text-4xl font-semibold">Ya has iniciado sesión</h1>
        <h2 className="text-4xl font-semibold">Redireccionando...</h2>
      </div>
    ) 
  }

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
        <FcGoogle />
        Registrate usando Google
      </button>
      <p className="flex flex-row items-center justify-center gap-2 text-lg font-bold">
        <RiAccountPinBoxFill className="text-pistachio-900" /> ¿Ya tienes
        cuenta?
        <Link href="/ingreso" className="hover:underline">
          Ingresa
        </Link>
      </p>
    </>
  );
};

export default RegisterForm;
