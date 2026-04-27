import { create } from "zustand";
import { Lead } from "@/types/types";

const LOCAL_KEY = "crm_leads";

function loadLeads(): Lead[] {
  try {
    const data = localStorage.getItem(LOCAL_KEY);
    if (data) return JSON.parse(data);
  } catch {}
  return [
    {
      id: "1",
      name: "Empresa ABC",
      email: "contacto@empresaabc.com",
      status: "new",
      source: "LinkedIn",
      createdAt: new Date().toISOString(),
      value: 5000,
      projectType: "Web",
      techStack: ["React", "Node.js"],
      budget: 6000,
      clientType: "Empresa",
      notes: "Buscan migrar su sistema legacy a una SPA moderna.",
    },
    {
      id: "2",
      name: "Startup XYZ",
      email: "founder@xyzstartup.com",
      status: "contacted",
      source: "Web",
      createdAt: new Date().toISOString(),
      value: 2000,
      projectType: "API",
      techStack: ["Python"],
      budget: 2500,
      clientType: "Startup",
      notes: "Requieren una API REST para su MVP.",
    },
    {
      id: "3",
      name: "Carlos López",
      email: "carlos.lopez@gmail.com",
      status: "qualified",
      source: "Networking",
      createdAt: new Date().toISOString(),
      value: 1200,
      projectType: "Automatización",
      techStack: ["JavaScript"],
      budget: 1500,
      clientType: "Freelance",
      notes: "Quiere automatizar reportes en Google Sheets.",
    },
  ];
}

function saveLeads(leads: Lead[]) {
  localStorage.setItem(LOCAL_KEY, JSON.stringify(leads));
}

interface LeadStore {
  leads: Lead[];
  addLead: (lead: Omit<Lead, "id" | "createdAt">) => void;
  updateLead: (id: string, lead: Partial<Lead>) => void;
  deleteLead: (id: string) => void;
}

export const useLeadStore = create<LeadStore>((set) => ({
  leads: loadLeads(),
  addLead: (leadData) =>
    set((state) => {
      const newLead = {
        ...leadData,
        value: leadData.value ? Number(leadData.value) : 0,
        budget: leadData.budget ? Number(leadData.budget) : 0,
        id: Math.random().toString(36).substring(7),
        createdAt: new Date().toISOString(),
      };
      const leads = [...state.leads, newLead];
      saveLeads(leads);
      return { leads };
    }),
  updateLead: (id, leadData) =>
    set((state) => {
      const leads = state.leads.map((l) =>
        l.id === id
          ? {
              ...l,
              ...leadData,
              value:
                leadData.value !== undefined ? Number(leadData.value) : l.value,
              budget:
                leadData.budget !== undefined
                  ? Number(leadData.budget)
                  : l.budget,
            }
          : l,
      );
      saveLeads(leads);
      return { leads };
    }),
  deleteLead: (id) =>
    set((state) => {
      const leads = state.leads.filter((l) => l.id !== id);
      saveLeads(leads);
      return { leads };
    }),
}));
