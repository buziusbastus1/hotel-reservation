"use client";

import { useEffect, useRef } from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { BiDollar } from "react-icons/bi";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  formatPrice?: boolean;
  required?: boolean;
  minLength?: number;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type = "text",
  disabled,
  formatPrice,
  register,
  required,
  minLength,
  errors,
}) => {
  const errorMessage = errors[id]?.message; // Get the error message for the specific field
  const inputRef = useRef(null);

  // Function to focus the input when the label is clicked
  const handleLabelClick = () => {
    inputRef.current.focus();
  };

  useEffect(() => {
    // Check if the input should be autofocused when the component mounts
    if (formatPrice) {
      inputRef.current.focus();
    }
  }, [formatPrice]);
  return (
    <div className="w-full relative">
      {formatPrice && (
        <BiDollar
          size={24}
          className="absolute text-neutral-700 top-5 left-2"
        />
      )}
      <div className="relative">
        <input
          ref={inputRef}
          id={id}
          disabled={disabled}
          {...register(id, {
            required,
            minLength: {
              value: minLength || 0,
              message: `The field '${label}' must be at least ${minLength} characters long`,
            },
          })}
          placeholder=" "
          type={type}
          className={`
            peer w-full p-4 pt-4 font-light bg-white border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed 
            ${formatPrice ? "pl-9" : "pl-4"}
            ${formatPrice ? "border-rose-500" : "border-neutral-300"}
            ${formatPrice ? "focus:border-rose-500" : "focus:border-black"}
            ${errorMessage ? "border-rose-500" : ""}
          `}
        />
        <label
          htmlFor={id}
          className={`absolute text-md duration-150 transform translate-y-3 top-5 z-10 
            origin-[0] 
            peer-placeholder-shown:scale-100
            peer-placeholder-shown:translate-y-0
            peer-focus:scale-75
            peer-focus:translate-y-4
            ${formatPrice ? "left-9" : "left-4"}
            ${errorMessage ? "text-rose-500" : "text-zinc-400"}
          `}
          onClick={handleLabelClick} // This makes the label clickable
        >
          {label}
        </label>
      </div>
      {errorMessage && (
        <p className="text-rose-500 text-sm mt-1">{errorMessage.toString()}</p>
      )}
    </div>
  );
};

export default Input;
