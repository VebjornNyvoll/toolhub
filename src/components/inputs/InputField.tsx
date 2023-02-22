interface InputFieldProps {
  label: string;
  name: string;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
}

const InputField = ({
  label,
  name,
  placeholder,
  className,
  disabled,
}: InputFieldProps) => {
  return (
    <label
      className={`flex flex-col gap-[0.3rem] ${className ? className : ""}`}
    >
      <p>{label}</p>
      <input
        type="text"
        name={name}
        className="rounded-full border-2 border-black bg-gray-100 p-2 px-4"
        placeholder={placeholder}
        disabled={disabled}
      />
    </label>
  );
};

export default InputField;
