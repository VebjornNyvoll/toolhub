interface InputFieldProps {
  label: string;
  name: string;
  placeholder?: string;
  className?: string;
  type?: string;
}

const InputField = ({
  label,
  name,
  placeholder,
  className,
  type,
}: InputFieldProps) => {
  return (
    <label
      className={`flex flex-col gap-[0.3rem] ${className ? className : ""}`}
    >
      <p>{label}</p>
      <input
        type={type ? type : "text"}
        name={name}
        className="rounded-full border-2 border-black bg-gray-100 p-2 px-4"
        placeholder={placeholder}
      />
    </label>
  );
};

export default InputField;
