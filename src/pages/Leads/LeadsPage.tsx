import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { LeadsTable } from "@/components/LeadsTable/LeadsTable";
import "./LeadsPages.css";
import { Lead } from "@/types/types";
import { LeadsSearchInput } from "@/components/LeadsSearchInput/LeadsSearchInput";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Leads } from "@/data/LeadsData";
const leads: Lead[] = Leads;
export const LeadsPage: React.FC = () => {
  useScrollReveal();
  const [search, setSearch] = React.useState("");

  const filteredLeads = React.useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return leads;
    return leads.filter((lead) =>
      [
        lead.name,
        lead.email,
        lead.status,
        lead.source,
        lead.projectType,
        lead.techStack?.join(" "),
        lead.clientType,
        lead.notes,
      ]
        .filter(Boolean)
        .some((field) => (field ?? "").toLowerCase().includes(q)),
    );
  }, [search]);

  return (
    <div className="leads-root space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight cyber-glow-text">
          Clientes / Leads de Desarrollo de Software
        </h2>
        <p className="text-muted-foreground">
          Gestiona tus prospectos, clientes y oportunidades para proyectos de
          software.
        </p>
      </div>
      <Card className="Card-leads cyber-glow">
        <CardHeader>
          <CardTitle className="cyber-glow-text text-xl">
            Lista de Clientes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div style={{ overflowX: "auto" }} className="custom-scrollbar">
            <LeadsSearchInput value={search} onChange={setSearch} />
            <LeadsTable leads={filteredLeads} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
