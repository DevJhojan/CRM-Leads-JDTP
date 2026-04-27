import "./Fields.css";
import * as React from "react";

const inputStyle = {
  background: "var(--code-bg)",
  color: "var(--text-h)",
  border: "1.5px solid var(--border)",
  transition: "border 0.2s, box-shadow 0.2s",
};

type InputFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};
export const InputField: React.FC<InputFieldProps> = ({ label, ...props }) => (
  <div>
    {label && <label className="block text-sm mb-1">{label}</label>}
    <input
      {...props}
      className={"w-full rounded-md p-2 " + (props.className || "")}
      style={inputStyle}
    />
  </div>
);

type SelectFieldProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string;
  options: { value: string; label: string }[];
};
export const SelectField: React.FC<SelectFieldProps> = ({
  label,
  options,
  ...props
}) => (
  <div>
    {label && <label className="block text-sm mb-1">{label}</label>}
    <select
      {...props}
      className={"w-full rounded-md p-2 " + (props.className || "")}
      style={inputStyle}
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  </div>
);
