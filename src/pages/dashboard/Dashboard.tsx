import * as React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { useLeadStore } from "@/store/useLeadStore";
import { TrendingUp, Users, Target, CheckCircle } from "lucide-react";
import { cn } from "@/utils/utils";
import "./Dashboard.css";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const Dashboard: React.FC = () => {
  const leads = useLeadStore((state) => state.leads);
  useScrollReveal();

  const stats = [
    {
      label: "Total Leads",
      value: leads.length,
      icon: Users,
      color: "#ffb6b6",
    },
    {
      label: "Contactados",
      value: leads.filter((l) => l.status === "contacted").length,
      icon: Target,
      color: "#ff7c00",
    },
    {
      label: "Ganados",
      value: leads.filter((l) => l.status === "won").length,
      icon: CheckCircle,
      color: "#ffd700",
    },
    {
      label: "Valor Total Presupuestado",
      value: `$${leads.reduce((acc, l) => acc + (typeof l.budget === "number" ? l.budget : Number(l.budget) || 0), 0).toLocaleString("es-CO")}`,
      icon: TrendingUp,
      color: "#ff3c00",
    },
  ];

  return (
    <div className="dashboard-root space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight cyber-glow-text">
          Dashboard
        </h2>
        <p className="text-muted-foreground">
          Bienvenido de nuevo a tu CRM personal.
        </p>
      </div>

      <div className="dashboard-stats-row">
        {stats.map((stat) => (
          <Card
            key={stat.label}
            className="cyber-glow card dashboard-stats-card"
          >
            <CardHeader className="flex flex-col items-center justify-center pb-2">
              <div className="flex flex-row items-center justify-center gap-2 w-full mb-2">
                <CardTitle className="text-base font-bold cyber-glow-text text-center m-0 p-0">
                  {stat.label}
                </CardTitle>
                <stat.icon
                  size={28}
                  style={{
                    color: stat.color,
                    filter: "drop-shadow(0 0 8px #ff3c00cc)",
                  }}
                />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold cyber-glow-text text-center">
                {stat.value}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid md:grid-cols-2">
        <Card className="col-span-1 cyber-glow card">
          <CardHeader className="flex flex-col items-center justify-center px-8 pt-2 pb-0">
            <CardTitle className="cyber-glow-text text-center w-full">
              Actividad Reciente
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="dashboard-activity-list">
              {leads.slice(0, 5).map((lead) => (
                <div key={lead.id} className="dashboard-activity-item">
                  <div className="dashboard-activity-info">
                    <span className="dashboard-activity-name">{lead.name}</span>
                    <span className="dashboard-activity-email">
                      {lead.email}
                    </span>
                  </div>
                  <div className="dashboard-activity-status">
                    <span
                      className={cn(
                        "cyber-badge",
                        lead.status === "new"
                          ? "status-new"
                          : lead.status === "contacted"
                            ? "status-contacted"
                            : lead.status === "won"
                              ? "status-won"
                              : "",
                      )}
                    >
                      {lead.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
