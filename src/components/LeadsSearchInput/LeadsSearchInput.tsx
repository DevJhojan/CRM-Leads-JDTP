import "./LeadsSearchInput.css";
import * as React from "react";
import { Search } from "lucide-react";

interface LeadsSearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const LeadsSearchInput: React.FC<LeadsSearchInputProps> = ({
  value,
  onChange,
  placeholder,
}) => (
  <div className="leads-search-cyber flex-1">
    <Search size={18} />
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder || "Buscar..."}
    />
  </div>
);
