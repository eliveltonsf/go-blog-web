import Image from "next/image";
import { InputHTMLAttributes } from "react";

type TextInputProps = {
  label?: string;
  name?: string;
  type: string;
  isLoading?: boolean;
  placeholderText?: string;
  error?: boolean;
  register?: any;
  errorsLabel?: any;
  defaultValue?: any;
  value?: string;
  noEdit?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

export const TextInput = (props: TextInputProps) => {
  const {
    label,
    placeholderText,
    error,
    register,
    name,
    type,
    isLoading,
    value,
    errorsLabel,
    noEdit = true,
    ...rest
  } = props;

  const InputGrid = {
    border: "1px solid transparent",
    borderColor: !noEdit && !error ? "#3CCC10" : error ? "#EF6D44" : "#AAB2AF",
    alignItems: "center",
    padding: "0rem 1rem",
  };

  const Input = {
    width: "100%",
    border: "none",
    padding: "1rem 0rem",
  };

  return (
    <div {...rest}>
      <div className="grid gap-2.5 relative">
        {label && (
          <label
            className={`${
              error ? "text-red-500" : "text-ring"
            } font-medium ml-4 mb-4`}
          >
            {label}
          </label>
        )}

        <div
          style={InputGrid}
          className={`bg-transparent flex rounded-xl overflow-hidden`}
        >
          <input
            type={type}
            placeholder={placeholderText}
            {...register(name)}
            className="bg-transparent placeholder-shown:capitalize placeholder-shown:text-gray-500 placeholder:text-14"
            style={Input}
            value={value}
            defaultValue={props.defaultValue}
            {...rest}
          />

          {isLoading && (
            <Image
              src="/assets/spinner.svg"
              alt="Spinner"
              width={24}
              height={24}
              className="mr-12 animate-spin "
            />
          )}
        </div>
      </div>
      {errorsLabel && (
        <span className="text-12 font-medium text-red-regular ml-4 mt-4  -top-2 right-10">
          {errorsLabel.message}
        </span>
      )}
    </div>
  );
};
