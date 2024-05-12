"use client";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import PasswordInfo from "./PasswordInfo";
import { FaInfoCircle } from "react-icons/fa";
import { useState } from "react";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type,
  disabled,
  required,
  register,
  errors,
}) => {
  const [showPasswordInfo, setShowPasswordInfo] = useState(false);

  const togglePasswordInfo = () => {
    setShowPasswordInfo(!showPasswordInfo);
  };

  return (
    <div className="w-full relative">
      <input
        autoComplete="off"
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        placeholder=""
        type={type}
        className={`peer w-full p-4 pt-6 outline-none bg-white font-medium border-2 rounded-md transition disabled:opacity-70 disabled:cursor-not-allowed border-slate-200
        ${errors[id] ? "border-rose-600" : "border-pistachio-400"}
        ${errors[id] ? "focus:border-rose-600" : "focus:border-pistachio-400"}`}
      />
      <label
        htmlFor={id}
        className={`absolute cursor-text text-md text-slate-400 duration-150 transform -translate-y-3 top-5 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 font-bold peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 
        ${errors[id] ? "text-rose-600" : "text-pistachio-400"}`}
      >
        {label}
      </label>
      {id === 'password' && (
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
          <FaInfoCircle
            className="text-gray-500 hover:text-pistachio-700 cursor-pointer text-xl"
            onClick={togglePasswordInfo}
          />
          {showPasswordInfo && <PasswordInfo onClose={togglePasswordInfo} />}
        </div>
      )}
    </div>
  );
};

export default Input;
//text-gray-500 hover:text-pistachio-700 cursor-pointer text-xl