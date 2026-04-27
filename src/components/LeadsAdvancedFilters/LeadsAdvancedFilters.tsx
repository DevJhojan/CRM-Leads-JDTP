import "./LeadsAdvancedFilters.css";
import * as React from "react";
import { LeadStatus, ProjectType, TechStack, ClientType } from "@/types/types";

interface LeadsAdvancedFiltersProps {
  filters: {
    status?: LeadStatus;
    projectType?: ProjectType;
    techStack?: string;
    clientType?: ClientType;
  };
  onChange: (filters: LeadsAdvancedFiltersProps["filters"]) => void;
  onClose: () => void;
}

export const LeadsAdvancedFilters: React.FC<LeadsAdvancedFiltersProps> = ({
  filters,
  onChange,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-card p-6 rounded-xl shadow-xl cyber-glow min-w-[320px] relative">
        <button
          className="absolute top-2 right-2 text-accent"
          onClick={onClose}
        >
          &times;
        </button>
        <h3 className="text-lg font-bold mb-4 cyber-glow-text">
          Filtros avanzados
        </h3>
        {/* ...resto del contenido... */}
      </div>
    </div>
  );
};
