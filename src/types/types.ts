export type ProjectType =
  | "Web"
  | "Mobile"
  | "API"
  | "Consultoría"
  | "Automatización"
  | "Otro";
export type TechStack =
  | "JavaScript"
  | "TypeScript"
  | "React"
  | "Node.js"
  | "Python"
  | "Java"
  | "C#"
  | "PHP"
  | "Otro";
export type ClientType =
  | "Empresa"
  | "Startup"
  | "Freelance"
  | "Agencia"
  | "Otro";

export interface Lead {
  id: string;
  name: string;
  email: string;
  status: "new" | "contacted" | "qualified" | "lost" | "won";
  source: string;
  createdAt: string;
  value?: number;
  projectType?: ProjectType;
  techStack?: TechStack[];
  budget?: number;
  clientType?: ClientType;
  notes?: string;
}

export type LeadStatus = Lead["status"];
