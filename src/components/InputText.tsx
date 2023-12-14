import clsx from "clsx";

const InputText = ({
  inputName,
  placeholder = "Text",
  isError = false,
  inputType = "text",
}: {
  inputName: string;
  placeholder: string;
  isError?: boolean;
  inputType?: "text" | "password";
}) => {
  return (
    <div>
      <label
        htmlFor={inputName}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {isError ? "This field is required" : inputName}
      </label>
      <input
        type={inputType}
        id={inputName}
        className={clsx(
          isError
            ? "border-red-500 focus:outline-none"
            : "focus:ring-blue-500 focus:border-blue-500",
          "text-gray-900 text-sm",
          "bg-gray-50 border border-gray-300 rounded-lg",
          "block w-full p-2.5"
        )}
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export default InputText;
