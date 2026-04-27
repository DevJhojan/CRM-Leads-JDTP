import "./Layout.css";
import * as React from "react";
import {
  LayoutDashboard,
  Users,
  Settings,
  LogOut,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

import { Link, useLocation, Outlet } from "react-router-dom";
import { cn } from "@/utils/utils";
import BrandLogo from "../brand-logo/BrandLogo";

interface SidebarItemProps {
  icon: React.ElementType;
  label: string;
  href: string;
}

const menuItems: SidebarItemProps[] = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/" },
  { icon: Users, label: "Leads", href: "/leads" },
  { icon: Settings, label: "Configuración", href: "/settings" },
];

export function Layout(){
  const location = useLocation();
  const [expanded, setExpanded] = React.useState(true);

  return (
    <div className="layout-root">
      <aside
        className={`sidebar transition-all duration-300 flex flex-col shadow-xl z-20 ${expanded ? "expanded" : "collapsed"}`}
      >
        {/* Botón de colapsar */}
        <div className="flex flex-col items-center justify-end p-2">
          <button
            className="rounded-full p-2 hover:bg-accent/20 transition-colors"
            onClick={() => setExpanded((v) => !v)}
            title={expanded ? "Colapsar" : "Expandir"}
          >
            {expanded ? (
              <ChevronsRight size={20} />
            ) : (
              <ChevronsLeft size={20} />
            )}
          </button>
        </div>

        {/* Branding */}
        <div
          className= "Card-branding flex items-center gap-2 px-4 py-3 mb-6"
        >
          <BrandLogo />
          {expanded && (
            <>
              <h1 className="font-extrabold tracking-tight text-xl mb-0.5 text-gradient block">
                CRM Leads
              </h1>
            </>
          )}
        </div>

        {/* Navegación */}
        <nav className="flex-1 flex flex-col gap-1 items-center w-full px-2">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.href}
                to={item.href}
                className={cn("w-full", isActive ? "active" : "")}
                style={{
                  marginBottom: 2,
                  justifyContent: expanded ? "flex-start" : "center",
                  display: "flex",
                  alignItems: "center",
                  gap: expanded ? 12 : 0,
                }}
                title={item.label}
              >
                <item.icon size={22} className="shrink-0" />
                {expanded && (
                  <span className="font-medium text-gradient truncate">
                    {item.label}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Footer - Botón Cerrar Sesión como footer fijo */}
        <footer
          className="sidebar-footer w-full px-2 pb-4"
          style={{
            position: "absolute",
            left: 0,
            bottom: 0,
            width: "100%",
            borderTop: "2px solid #0fdcff33",
            background: "linear-gradient(90deg, #181c24 80%, #0fdcff11 100%)",
            boxShadow: "0 -2px 16px 0 #0fdcff22 inset",
            zIndex: 30,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <button
            className="flex items-center space-x-3 px-3 py-2 text-accent hover:text-primary transition-colors w-full rounded-lg hover:bg-accent/10"
            style={{ justifyContent: expanded ? "flex-start" : "center" }}
          >
            <LogOut size={20} />
            {expanded && <span className="font-medium">Cerrar Sesión</span>}
          </button>
        </footer>
      </aside>
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};
