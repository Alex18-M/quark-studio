import { CORREO, WHATSAPP } from "../data.js";
import { abrirWhatsapp } from "../lib/whatsapp.js";

const NECESIDADES = ["Página web", "Tienda en línea", "Web con citas y panel", "Sistema a la medida", "Otra cosa"];

export default function Contacto() {
  function enviar(e) {
    e.preventDefault();
    const d = new FormData(e.target);
    const nombre = d.get("n");
    const negocio = d.get("b");
    const necesidad = d.get("t");
    const mensaje = d.get("m");

    // Primero se abre WhatsApp (así el navegador no bloquea la ventana)
    abrirWhatsapp(`Hola Quark Studio, soy ${nombre}${negocio ? " de " + negocio : ""}. Necesito: ${necesidad}. ${mensaje}`);

    // Además se guarda en el servidor Node; si el servidor no está encendido, no pasa nada
    fetch("/api/contacto", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre, negocio, necesidad, mensaje }),
    }).catch(() => {});
  }

  return (
    <section id="contacto" className="contact">
      <div className="wrap">
        <h2>Cuéntanos qué necesitas</h2>
        <div className="cgrid">
          <div className="info">
            <p>Te respondemos por WhatsApp para armar una propuesta sin compromiso.</p>
            <p>
              WhatsApp: <a href={`https://wa.me/${WHATSAPP}`}>+505 5734 4053</a>
            </p>
            <p>
              Correo: <a href={`mailto:${CORREO}`}>{CORREO}</a>
            </p>
            <p>Instagram, TikTok y Facebook: próximamente.</p>
          </div>
          <form onSubmit={enviar}>
            <label>
              Tu nombre
              <input name="n" required autoComplete="name" maxLength={100} />
            </label>
            <label>
              Nombre de tu negocio
              <input name="b" maxLength={100} />
            </label>
            <label>
              ¿Qué necesitas?
              <select name="t">
                {NECESIDADES.map((n) => (
                  <option key={n}>{n}</option>
                ))}
              </select>
            </label>
            <label>
              Mensaje
              <textarea name="m" maxLength={1000} />
            </label>
            <button className="btn" type="submit">
              Enviar por WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
