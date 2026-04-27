import "./Settings.css";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function SettingsPages() {
  useScrollReveal();
  return (
    <>
      <h1 className="text-2xl font-bold mb-4 cyber-glow-text">Configuración</h1>
      <p className="text-muted-foreground mb-8">
        Personaliza los ajustes generales, datos de empresa, usuario y
        notificaciones de tu CRM.
      </p>
      <div className="Card-settings space-y-10 p-4 max-w-2xl mx-auto">
        {/* Datos de la Empresa */}
        <div className="card-cyber p-6 shadow-xl cyber-glow">
          <h2 className="text-lg font-semibold mb-4 text-gradient cyber-glow-text">
            Datos de la Empresa
          </h2>
          <form className="settings-form">
            <label className="settings-label">Nombre de la empresa</label>
            <input
              type="text"
              placeholder="Ej: Mi Empresa S.A."
              className="settings-input"
            />
            <label className="settings-label">Correo de contacto</label>
            <input
              type="email"
              placeholder="empresa@email.com"
              className="settings-input"
            />
            <label className="settings-label">Teléfono</label>
            <input
              type="tel"
              placeholder="+57 300 000 0000"
              className="settings-input"
            />
            <label className="settings-label">Sector</label>
            <select className="settings-input">
              <option value="">Selecciona un sector</option>
              <option value="tecnologia">Tecnología</option>
              <option value="salud">Salud</option>
              <option value="finanzas">Finanzas</option>
              <option value="educacion">Educación</option>
            </select>
            <label className="settings-label">Dirección</label>
            <input
              type="text"
              placeholder="Calle 123 #45-67, Ciudad"
              className="settings-input"
            />
            <label className="settings-label">Sitio web</label>
            <input
              type="url"
              placeholder="https://miempresa.com"
              className="settings-input"
            />
          </form>
        </div>

        {/* Usuario */}
        <div className="Card-settings p-6 shadow-xl cyber-glow">
          <h2 className="text-lg font-semibold mb-4 text-gradient cyber-glow-text">
            Usuario
          </h2>
          <form className="settings-form">
            <div className="input-group">
              <label className="settings-label">Nombre de usuario</label>
              <input
                type="text"
                placeholder="Ej: Juan Pérez"
                className="settings-input"
              />
            </div>
            <div className="input-group">
              <label className="settings-label">Email de usuario</label>
              <input
                type="email"
                placeholder="usuario@email.com"
                className="settings-input"
              />
            </div>
            <div className="input-group">
              <label className="settings-label">Contraseña</label>
              <input
                type="password"
                placeholder="••••••••"
                className="settings-input"
              />
            </div>
          </form>
        </div>

        {/* Notificaciones */}
        <div className=" Card-settings card-cyber p-6 shadow-xl cyber-glow">
          <h2 className="text-lg font-semibold mb-4 text-gradient cyber-glow-text">
            Notificaciones
          </h2>
          <form className="settings-form">
            <div className="input-group">
              <label className="settings-label">
                Recibir notificaciones por email
              </label>
              <input type="checkbox" className="settings-checkbox" />
            </div>
            <div className="input-group">
              <label className="settings-label settings-label-full">
                Notificarme sobre nuevos leads
              </label>
              <input type="checkbox" className="settings-checkbox" />
            </div>
            <div className="input-group">
              <label className="settings-label">
                Recordatorios de seguimiento
              </label>
              <input type="checkbox" className="settings-checkbox" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
