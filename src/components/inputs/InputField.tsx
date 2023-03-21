import React from "react";

interface InputFieldProps {
  label: string;
  name: string;
  placeholder?: string;
  defaultValue?: string;
  className?: string;
  disabled?: boolean;
  type?: string;
  min?: number;
  max?: number;
}

const InputField = ({
  label,
  name,
  className,
  type,
  defaultValue,
  placeholder,
  min,
  max,
}: InputFieldProps) => {
  return (
    <label
      className={`flex flex-col gap-[0.3rem] ${className ? className : ""}`}
    >
      <p>{label}</p>
      <input
        type={type ? type : "text"}
        defaultValue={defaultValue}
        placeholder={placeholder}
        name={name}
        min={min}
        max={max}
        className="rounded-full border-2 border-black bg-gray-100 p-2 px-4"
      />
    </label>
  );
};

export default InputField;
