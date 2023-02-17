interface InputBoxProps {
  label: string;
  name: string;
  placeholder?: string;
  className?: string;
}

const InputBox = ({ label, name, placeholder, className }: InputBoxProps) => {
  return (
    <label
      className={`flex h-full flex-col gap-[0.3rem] ${
        className ? className : ""
      }`}
    >
      <p>{label}</p>
      <textarea
        name={name}
        className="h-full rounded-xl border-2 border-black bg-gray-100 p-2 px-4"
        placeholder={placeholder}
      />
    </label>
  );
};

export default InputBox;
