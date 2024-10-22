import React from "react";

interface InputFieldProps {
  htmlFor: string;
  type: string;
  placeholder: string;
  required: boolean;
  value: string | number | null;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  showButton?: boolean;
  buttonLabel?: string;
  onClickButton?: () => void;
}
const InputField: React.FC<InputFieldProps> = ({
  htmlFor,
  type,
  placeholder,
  required,
  value,
  onChange,
  showButton,
  buttonLabel,
  onClickButton,
}) => (
  <label htmlFor={htmlFor} className="w-full">
    <div className="flex w-full">
      <input
        className="border rounded-md p-2 w-full"
        type={type}
        name={htmlFor}
        id={htmlFor}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
      {showButton && onClickButton && (
        <button
          type="button"
          className="ml-2 w-1/3 bg-gray-400 text-white rounded-md"
          onClick={onClickButton}
        >
          {buttonLabel}
        </button>
      )}
    </div>
  </label>
);

export default InputField;