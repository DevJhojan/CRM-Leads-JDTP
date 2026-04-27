import "./LeadsTable.css";
import * as React from "react";
import { cn } from "@/utils/utils";
import { Lead } from "@/types/types";

interface LeadsTableProps {
  leads: Lead[];
  onEdit?: (lead: Lead) => void;
}

export const LeadsTable: React.FC<LeadsTableProps> = ({ leads, onEdit }) => (
  <div className="relative w-full overflow-auto custom-scrollbar">
    <table className="w-full caption-bottom text-sm cyber-glow">
      <thead className="[&_tr]:border-b">
        <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
          <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
            Nombre
          </th>
          <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
            Email
          </th>
          <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
            Estado
          </th>
          <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
            Fuente
          </th>
          <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
            Tipo Proyecto
          </th>
          <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
            Stack
          </th>
          <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
            Presupuesto
          </th>
          <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
            Tipo Cliente
          </th>
          <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
            Notas
          </th>
        </tr>
      </thead>
      <tbody className="[&_tr:last-child]:border-0">
        {leads.map((lead) => (
          <tr key={lead.id}>
            <td className="px-4 py-2">{lead.name}</td>
            <td className="px-4 py-2">{lead.email}</td>
            <td className="px-4 py-2">{lead.status}</td>
            <td className="px-4 py-2">{lead.source}</td>
            <td className="px-4 py-2">{lead.projectType}</td>
            <td className="px-4 py-2">{lead.techStack?.join(", ")}</td>
            <td className="px-4 py-2">{lead.budget || lead.value || ""}</td>
            <td className="px-4 py-2">{lead.clientType}</td>
            <td className="px-4 py-2">{lead.notes}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
