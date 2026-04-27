import "./LeadFormModal.css";
import * as React from "react";
import { InputField, SelectField } from "@/components/ui/Fields";
import {
  Lead,
  ProjectType,
  TechStack,
  ClientType,
  LeadStatus,
} from "@/types/types";

interface LeadFormModalProps {
  open: boolean;
  onClose: () => void;
  initialLead: Lead | null;
  onSubmit: (data: Omit<Lead, "id" | "createdAt">) => void;
}

const statusOptions = [
  { value: "new", label: "Nuevo" },
  { value: "contacted", label: "Contactado" },
  { value: "qualified", label: "Calificado" },
  { value: "lost", label: "Perdido" },
  { value: "won", label: "Ganado" },
];
const projectTypeOptions = [
  { value: "Web", label: "Web" },
  { value: "Mobile", label: "Mobile" },
  { value: "API", label: "API" },
  { value: "Consultoría", label: "Consultoría" },
  { value: "Automatización", label: "Automatización" },
  { value: "Otro", label: "Otro" },
];
const clientTypeOptions = [
  { value: "Empresa", label: "Empresa" },
  { value: "Startup", label: "Startup" },
  { value: "Freelance", label: "Freelance" },
  { value: "Agencia", label: "Agencia" },
  { value: "Otro", label: "Otro" },
];
const techStackOptions = [
  { value: "JavaScript", label: "JavaScript" },
  { value: "TypeScript", label: "TypeScript" },
  { value: "React", label: "React" },
  { value: "Node.js", label: "Node.js" },
  { value: "Python", label: "Python" },
  { value: "Java", label: "Java" },
  { value: "C#", label: "C#" },
  { value: "PHP", label: "PHP" },
  { value: "Otro", label: "Otro" },
];

export const LeadFormModal: React.FC<LeadFormModalProps> = ({
  open,
  onClose,
  initialLead,
  onSubmit,
}) => {
  const [form, setForm] = React.useState<Omit<Lead, "id" | "createdAt">>({
    name: initialLead?.name || "",
    email: initialLead?.email || "",
    status: initialLead?.status || "new",
    source: initialLead?.source || "",
    value: initialLead?.value || 0,
    projectType: initialLead?.projectType || "Web",
    techStack: initialLead?.techStack || [],
    budget: initialLead?.budget || 0,
    clientType: initialLead?.clientType || "Empresa",
    notes: initialLead?.notes || "",
  });

  React.useEffect(() => {
    if (initialLead) {
      setForm({
        name: initialLead.name || "",
        email: initialLead.email || "",
        status: initialLead.status || "new",
        source: initialLead.source || "",
        value: initialLead.value || 0,
        projectType: initialLead.projectType || "Web",
        techStack: initialLead.techStack || [],
        budget: initialLead.budget || 0,
        clientType: initialLead.clientType || "Empresa",
        notes: initialLead.notes || "",
      });
    } else {
      setForm({
        name: "",
        email: "",
        status: "new",
        source: "",
        value: 0,
        projectType: "Web",
        techStack: [],
        budget: 0,
        clientType: "Empresa",
        notes: "",
      });
    }
  }, [initialLead]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleTechStackChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = Array.from(e.target.selectedOptions, (opt) => opt.value);
    setForm((prev) => ({ ...prev, techStack: selected as TechStack[] }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(form);
  };

  if (!open) return null;

  return (
    <div className="lead-modal-overlay">
      <div className="lead-modal-content">
        <button
          className="lead-modal-close"
          onClick={onClose}
          aria-label="Cerrar"
        >
          &times;
        </button>
        <h3 className="lead-modal-title">
          {initialLead ? "Editar Lead" : "Nuevo Lead"}
        </h3>
        <form className="lead-modal-form" onSubmit={handleSubmit}>
          <InputField
            label="Nombre"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <InputField
            label="Email"
            name="email"
            value={form.email}
            onChange={handleChange}
            type="email"
            required
          />
          <InputField
            label="Fuente"
            name="source"
            value={form.source}
            onChange={handleChange}
          />
          <SelectField
            label="Estado"
            name="status"
            value={form.status}
            onChange={handleChange}
            options={statusOptions}
            required
          />
          <SelectField
            label="Tipo de Proyecto"
            name="projectType"
            value={form.projectType}
            onChange={handleChange}
            options={projectTypeOptions}
          />
          <label>Tecnologías</label>
          <select
            multiple
            name="techStack"
            value={form.techStack}
            onChange={handleTechStackChange}
          >
            {techStackOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <InputField
            label="Presupuesto"
            name="budget"
            value={form.budget}
            onChange={handleChange}
            type="number"
            min={0}
          />
          <SelectField
            label="Tipo de Cliente"
            name="clientType"
            value={form.clientType}
            onChange={handleChange}
            options={clientTypeOptions}
          />
          <label>Notas</label>
          <textarea
            name="notes"
            value={form.notes}
            onChange={handleChange}
            placeholder="Notas"
            rows={3}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "end",
              gap: "0.5rem",
              marginTop: "1.2rem",
            }}
          >
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
            >
              Cancelar
            </button>
            <button type="submit" className="btn btn-primary">
              {initialLead ? "Guardar" : "Crear"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
