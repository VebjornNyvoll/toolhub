import React from "react"

interface InputFieldProps {
  label: string;
  name: string;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
}

const InputField = (props: InputFieldProps & React.HTMLProps<HTMLInputElement>) => {
  const { label, className } = props;
  return (
    <label
      className={`flex flex-col gap-[0.3rem] ${className ? className : ""}`}
    >
      <p>{label}</p>
      <input
        type="text"
        className="rounded-full border-2 border-black bg-gray-100 p-2 px-4"
        {...props}
      />
    </label>
  );
};

export default InputField;
