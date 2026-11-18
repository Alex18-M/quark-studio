const MENU = [
  "Resumen",
  "Mensajes",
  "Portafolio",
  "Paquetes y precios",
  "Testimonios",
  "Preguntas",
];
const ESTADISTICAS = [
  ["128", "Visitas esta semana"],
  ["14", "Clics en WhatsApp"],
  ["5", "Mensajes nuevos"],
];
const MENSAJES = [
  ["Ana", "Clínica de ejemplo", "Página web", "Nuevo"],
  ["Luis", "Barbería de ejemplo", "Web con citas", "Contactado"],
  ["Sofía", "Tienda de ejemplo", "Tienda en línea", "Nuevo"],
];

// Vista previa con datos de ejemplo (no está conectada a una base de datos todavía)
export default function Panel() {
  return (
    <main id="panel" style={{ display: "block" }}>
      <div className="wrap">
        <a href="#inicio">← Volver al sitio</a>
        <h2 style={{ marginTop: "18px" }}>Panel de administración</h2>
        <p className="sub">
          Vista previa con datos de ejemplo. En la versión final, aquí
          administrarás mensajes, portafolio y paquetes.
        </p>
        <div className="adm">
          <div className="side">
            {MENU.map((item, i) => (
              <span key={item} className={i === 0 ? "on" : undefined}>
                {item}
              </span>
            ))}
          </div>
          <div>
            <div className="stats">
              {ESTADISTICAS.map(([numero, texto]) => (
                <div key={texto}>
                  <b>{numero}</b>
                  <span>{texto}</span>
                </div>
              ))}
            </div>
            <div className="tw">
              <table>
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Negocio</th>
                    <th>Necesita</th>
                    <th>Estado</th>
                  </tr>
                </thead>
                <tbody>
                  {MENSAJES.map(([nombre, negocio, necesita, estado]) => (
                    <tr key={nombre}>
                      <td>{nombre}</td>
                      <td>{negocio}</td>
                      <td>{necesita}</td>
                      <td>
                        <span className="st">{estado}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
