import { Fragment } from "react";
import {
  SECTORES, SERVICIOS, PROYECTOS, PASOS, POR_QUE, TECNOLOGIAS,
  CORREO, WHATSAPP, MENSAJE_COTIZAR, MENSAJE_PROPUESTA,
} from "../data.js";
import { urlWhatsapp } from "../lib/whatsapp.js";

const TITULO = ["Diseñamos", "el futuro", "digital", "de tu negocio."];

function EnlaceWhatsapp({ mensaje, className = "btn", children }) {
  return (
    <a className={className} href={urlWhatsapp(mensaje)} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export function Hero() {
  return (
    <div className="hero" id="inicio">
      <div className="wrap">
        <div className="copy">
          <h1>
            {TITULO.map((palabra, i) => (
              <Fragment key={palabra}>
                {i > 0 && " "}
                <span className="w">{palabra}</span>
              </Fragment>
            ))}
          </h1>
          <p className="lead">
            Somos una startup tecnológica nicaragüense que crea páginas web y software a la medida para negocios que
            quieren vender más y trabajar mejor.
          </p>
          <div className="cta">
            <EnlaceWhatsapp mensaje={MENSAJE_COTIZAR}>Cotizar por WhatsApp</EnlaceWhatsapp>
            <a className="btn ghost" href="#paquetes">
              Ver paquetes
            </a>
          </div>
        </div>
        <div className="visual">
          <img className="planet" src="/images/planeta.png" alt="Planeta con anillo, símbolo de Quark Studio" />
          <aside className="glass float">
            <b>De la idea al lanzamiento</b>
            <ul>
              <li>Propuesta sin compromiso</li>
              <li>Respuesta por WhatsApp</li>
              <li>Diseño 100% a medida</li>
            </ul>
          </aside>
        </div>
      </div>
    </div>
  );
}

export function Sectores() {
  return (
    <div className="wrap">
      <div className="strip">
        <small>Trabajamos con</small>
        {SECTORES.map((sector) => (
          <span className="chipx" key={sector}>
            {sector}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Servicios() {
  return (
    <section id="servicios">
      <div className="wrap">
        <h2>Lo que construimos para tu negocio</h2>
        <div className="rows">
          {SERVICIOS.map(([titulo, texto]) => (
            <div className="row" key={titulo}>
              <h3>{titulo}</h3>
              <p>{texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Portafolio() {
  return (
    <section id="portafolio">
      <div className="wrap">
        <h2>Proyectos</h2>
        <p className="sub">
          Estos son ejemplos del tipo de trabajo que hacemos. Aquí irán tus proyectos reales conforme los entreguemos.
        </p>
        <div className="work">
          {PROYECTOS.map((nombre) => (
            <div className="shot" key={nombre}>
              <i />
              <div>
                <b>{nombre}</b>
                <span>Proyecto de ejemplo</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Proceso() {
  return (
    <section id="proceso" className="alt">
      <div className="wrap">
        <h2>Cómo trabajamos</h2>
        <ol className="steps">
          {PASOS.map(([titulo, texto]) => (
            <li key={titulo}>
              <b>{titulo}</b>
              <span>{texto}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function PorQue() {
  return (
    <section id="porque">
      <div className="wrap">
        <h2>Por qué elegir Quark Studio</h2>
        <div className="why">
          {POR_QUE.map(([titulo, texto]) => (
            <div key={titulo}>
              <b>{titulo}</b>
              <p>{texto}</p>
            </div>
          ))}
        </div>
        <p className="sub" style={{ marginTop: "44px" }}>
          Construimos con
        </p>
        <div className="tech">
          {TECNOLOGIAS.map((tecnologia) => (
            <span className="chipx" key={tecnologia}>
              {tecnologia}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Banda() {
  return (
    <section style={{ padding: "40px 0" }}>
      <div className="wrap">
        <div className="band">
          <h2>¿Listo para llevar tu negocio a otra órbita?</h2>
          <p>Cuéntanos tu idea y te enviamos una propuesta sin compromiso.</p>
          <EnlaceWhatsapp mensaje={MENSAJE_PROPUESTA}>Escribir por WhatsApp</EnlaceWhatsapp>
        </div>
      </div>
    </section>
  );
}

export function Pie() {
  return (
    <footer>
      <div className="wrap">
        <div className="fcols">
          <div>
            <img className="logo" style={{ height: "44px" }} src="/images/logo.png" alt="Quark Studio" />
            <p style={{ marginTop: "14px", maxWidth: "30ch", color: "var(--mute)" }}>
              Diseñamos el futuro digital de tu negocio.
            </p>
          </div>
          <div>
            <h4>Navegación</h4>
            <ul>
              <li><a href="#servicios">Servicios</a></li>
              <li><a href="#paquetes">Paquetes</a></li>
              <li><a href="#portafolio">Portafolio</a></li>
              <li><a href="#proceso">Proceso</a></li>
            </ul>
          </div>
          <div>
            <h4>Contacto</h4>
            <ul>
              <li><a href={`https://wa.me/${WHATSAPP}`}>WhatsApp: +505 5734 4053</a></li>
              <li><a href={`mailto:${CORREO}`}>{CORREO}</a></li>
              <li>Managua, Nicaragua</li>
            </ul>
          </div>
          <div>
            <h4>Redes</h4>
            <ul>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>TikTok</li>
            </ul>
            <p style={{ marginTop: "8px", fontSize: ".85rem" }}>Próximamente</p>
          </div>
        </div>
        <div className="fbar">
          <span>© 2026 Quark Studio. Todos los derechos reservados.</span>
          <a href="#panel">Panel de administración (vista previa)</a>
        </div>
      </div>
    </footer>
  );
}

export function BotonWhatsapp() {
  return (
    <a
      className="wa"
      href={urlWhatsapp(MENSAJE_COTIZAR)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.8 14.2c-.2.7-1.4 1.3-2 1.4-.5.1-1.2.1-1.9-.1-.4-.1-1-.3-1.7-.6-3-1.3-4.900-4.300-5.100-4.500-.1-.2-1.200-1.600-1.200-3s.8-2.100 1-2.400c.3-.3.600-.3.800-.3h.6c.2 0 .4 0 .6.500l.8 2c.1.200.1.300 0 .5l-.3.400-.4.500c-.1.100-.3.300-.1.600.2.300.7 1.200 1.500 1.900 1 .9 1.900 1.200 2.200 1.300.3.100.4.100.6-.1l.8-1c.2-.3.400-.2.600-.1l1.900.9c.3.100.5.200.5.300.1.100.1.700-.1 1.400Z" />
      </svg>
    </a>
  );
}
