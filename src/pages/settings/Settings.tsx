import React from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import "./Settings.css";
const SETTINGS_KEY = "crm_settings";

const defaultSettings = {
  company: {
    name: "",
    email: "",
    phone: "",
    sector: "",
    address: "",
    website: "",
  },
  user: {
    name: "",
    email: "",
    password: "",
  },
  notifications: {
    email: false,
    newLeads: false,
    reminders: false,
  },
};

function loadSettings() {
  try {
    const data = localStorage.getItem(SETTINGS_KEY);
    if (data) return JSON.parse(data);
  } catch {}
  return defaultSettings;
}

function saveSettings(settings: any) {
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
}

export function SettingsPages() {
  useScrollReveal();
  const [settings, setSettings] = React.useState(loadSettings());
  const [saved, setSaved] = React.useState(false);

  const handleCompanyChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setSettings((prev: any) => ({
      ...prev,
      company: { ...prev.company, [name]: value },
    }));
  };
  const handleUserChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSettings((prev: any) => ({
      ...prev,
      user: { ...prev.user, [name]: value },
    }));
  };
  const [notifWarning, setNotifWarning] = React.useState("");
  const handleNotifChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setSettings((prev: any) => ({
      ...prev,
      notifications: { ...prev.notifications, [name]: checked },
    }));
    if (name === "email" && checked) {
      setNotifWarning(
        "Advertencia: Para que las notificaciones por email funcionen, debes conectar un backend o servicio externo de envío de correos (ej: EmailJS, SendGrid, Firebase Functions, etc.). Actualmente solo se guarda la preferencia.",
      );
    } else if (name === "email" && !checked) {
      setNotifWarning("");
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    saveSettings(settings);
    setSaved(true);
    setTimeout(() => setSaved(false), 1500);
  };

  React.useEffect(() => {
    setSettings(loadSettings());
  }, []);

  return (
    <>
      <h1 className="text-2xl font-bold mb-4 cyber-glow-text">Configuración</h1>
      <p className="text-muted-foreground mb-8">
        Personaliza los ajustes generales, datos de empresa, usuario y
        notificaciones de tu CRM.
      </p>
      <form onSubmit={handleSave}>
        <div className="Card-settings space-y-10 p-4 max-w-2xl mx-auto">
          {/* Datos de la Empresa */}
          <div className="card-cyber p-6 shadow-xl cyber-glow">
            <h2 className="text-lg font-semibold mb-4 text-gradient cyber-glow-text">
              Datos de la Empresa
            </h2>
            <div className="settings-form">
              <label className="settings-label">Nombre de la empresa</label>
              <input
                type="text"
                name="name"
                value={settings.company.name}
                onChange={handleCompanyChange}
                placeholder="Ej: Mi Empresa S.A."
                className="settings-input"
              />
              <label className="settings-label">Correo de contacto</label>
              <input
                type="email"
                name="email"
                value={settings.company.email}
                onChange={handleCompanyChange}
                placeholder="empresa@email.com"
                className="settings-input"
              />
              <label className="settings-label">Teléfono</label>
              <input
                type="tel"
                name="phone"
                value={settings.company.phone}
                onChange={handleCompanyChange}
                placeholder="+57 300 000 0000"
                className="settings-input"
              />
              <label className="settings-label">Sector</label>
              <select
                name="sector"
                value={settings.company.sector}
                onChange={handleCompanyChange}
                className="settings-input"
              >
                <option value="">Selecciona un sector</option>
                <option value="tecnologia">Tecnología</option>
                <option value="salud">Salud</option>
                <option value="finanzas">Finanzas</option>
                <option value="educacion">Educación</option>
              </select>
              <label className="settings-label">Dirección</label>
              <input
                type="text"
                name="address"
                value={settings.company.address}
                onChange={handleCompanyChange}
                placeholder="Calle 123 #45-67, Ciudad"
                className="settings-input"
              />
              <label className="settings-label">Sitio web</label>
              <input
                type="url"
                name="website"
                value={settings.company.website}
                onChange={handleCompanyChange}
                placeholder="https://miempresa.com"
                className="settings-input"
              />
            </div>
          </div>

          {/* Usuario */}
          <div className="Card-settings p-6 shadow-xl cyber-glow">
            <h2 className="text-lg font-semibold mb-4 text-gradient cyber-glow-text">
              Usuario
            </h2>
            <div className="settings-form">
              <div className="input-group">
                <label className="settings-label">Nombre de usuario</label>
                <input
                  type="text"
                  name="name"
                  value={settings.user.name}
                  onChange={handleUserChange}
                  placeholder="Ej: Juan Pérez"
                  className="settings-input"
                />
              </div>
              <div className="input-group">
                <label className="settings-label">Email de usuario</label>
                <input
                  type="email"
                  name="email"
                  value={settings.user.email}
                  onChange={handleUserChange}
                  placeholder="usuario@email.com"
                  className="settings-input"
                />
              </div>
              <div className="input-group">
                <label className="settings-label">Contraseña</label>
                <input
                  type="password"
                  name="password"
                  value={settings.user.password}
                  onChange={handleUserChange}
                  placeholder="••••••••"
                  className="settings-input"
                />
              </div>
            </div>
          </div>

          {/* Notificaciones */}
          <div className=" Card-settings card-cyber p-6 shadow-xl cyber-glow">
            <h2 className="text-lg font-semibold mb-4 text-gradient cyber-glow-text">
              Notificaciones
            </h2>
            <div className="settings-form">
              <div className="input-group">
                <label className="settings-label">
                  Recibir notificaciones por email
                </label>
                <input
                  type="checkbox"
                  name="email"
                  checked={settings.notifications.email}
                  onChange={handleNotifChange}
                  className="settings-checkbox"
                />
              </div>
              {notifWarning && (
                <div className="text-yellow-400 text-sm mb-2">
                  {notifWarning}
                </div>
              )}
              <div className="input-group">
                <label className="settings-label settings-label-full">
                  Notificarme sobre nuevos leads
                </label>
                <input
                  type="checkbox"
                  name="newLeads"
                  checked={settings.notifications.newLeads}
                  onChange={handleNotifChange}
                  className="settings-checkbox"
                />
              </div>
              <div className="input-group">
                <label className="settings-label">
                  Recordatorios de seguimiento
                </label>
                <input
                  type="checkbox"
                  name="reminders"
                  checked={settings.notifications.reminders}
                  onChange={handleNotifChange}
                  className="settings-checkbox"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end pt-4">
            <button type="submit" className="btn btn-primary">
              Guardar
            </button>
            {saved && <span className="ml-4 text-green-400">¡Guardado!</span>}
          </div>
        </div>
      </form>
    </>
  );
}
