import { useState } from "react";
import { MENSAJE_COTIZAR } from "../data.js";
import { urlWhatsapp } from "../lib/whatsapp.js";

const ENLACES = [
  ["servicios", "Servicios"],
  ["paquetes", "Paquetes"],
  ["portafolio", "Portafolio"],
  ["proceso", "Proceso"],
  ["nosotros", "Nosotros"],
  ["contacto", "Contacto"],
];

export default function Encabezado() {
  const [abierto, setAbierto] = useState(false);

  return (
    <header>
      <div className="wrap bar">
        <a href="#inicio" aria-label="Quark Studio, inicio">
          <img className="logo" src="/images/logo.png" alt="Quark Studio" />
        </a>
        <nav
          id="nav"
          className={abierto ? "open" : ""}
          onClick={(e) => {
            if (e.target.tagName === "A") setAbierto(false);
          }}
        >
          <button id="burger" aria-label="Abrir menú" aria-expanded={abierto} onClick={() => setAbierto(!abierto)}>
            Menú
          </button>
          <ul>
            {ENLACES.map(([id, texto]) => (
              <li key={id}>
                <a href={`#${id}`}>{texto}</a>
              </li>
            ))}
            <li>
              <a className="btn" href={urlWhatsapp(MENSAJE_COTIZAR)} target="_blank" rel="noopener noreferrer">
                Cotizar
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
