import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { LeadsTable } from "@/components/LeadsTable/LeadsTable";
import "./LeadsPages.css";

import { useLeadStore } from "@/store/useLeadStore";
import { LeadsSearchInput } from "@/components/LeadsSearchInput/LeadsSearchInput";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { LeadFormModal } from "@/components/LeadFormModal/LeadFormModal";
import { Button } from "@/components/ui/Button";
import { Lead } from "@/types/types";

export const LeadsPage: React.FC = () => {
  useScrollReveal();
  const leads = useLeadStore((state) => state.leads);
  const addLead = useLeadStore((state) => state.addLead);
  const updateLead = useLeadStore((state) => state.updateLead);
  const [search, setSearch] = React.useState("");
  const [modalOpen, setModalOpen] = React.useState(false);
  const [editingLead, setEditingLead] = React.useState<Lead | null>(null);

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
  }, [search, leads]);

  const handleAddLead = (data: Omit<Lead, "id" | "createdAt">) => {
    if (editingLead) {
      updateLead(editingLead.id, data);
      setEditingLead(null);
    } else {
      addLead(data);
    }
    setModalOpen(false);
  };

  return (
    <div className="leads-root space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
        <div>
          <h2 className="text-3xl font-bold tracking-tight cyber-glow-text">
            Clientes / Leads de Desarrollo de Software
          </h2>
          <p className="text-muted-foreground">
            Gestiona tus prospectos, clientes y oportunidades para proyectos de
            software.
          </p>
        </div>
        <Button
          className="btn-lead"
          variant="primary"
          size="md"
          onClick={() => setModalOpen(true)}
        >
          + Nuevo Cliente
        </Button>
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
            <LeadsTable
              leads={filteredLeads}
              onEdit={(lead) => {
                setEditingLead(lead);
                setModalOpen(true);
              }}
            />
          </div>
        </CardContent>
      </Card>
      <LeadFormModal
        open={modalOpen}
        onClose={() => {
          setModalOpen(false);
          setEditingLead(null);
        }}
        initialLead={editingLead}
        onSubmit={handleAddLead}
      />
    </div>
  );
};
