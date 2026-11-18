import { useState } from "react";
import { PAQUETES, EXTRAS } from "../data.js";
import { urlWhatsapp } from "../lib/whatsapp.js";

const dinero = (n) => "$" + n.toLocaleString("en-US");

export default function Paquetes() {
  const [indice, setIndice] = useState(2);
  const [elegidos, setElegidos] = useState({});

  const paquete = PAQUETES[indice];
  const extras = EXTRAS.map((extra, j) => ({ ...extra, j })).filter(
    (extra) => !extra.soloPaquetes || extra.soloPaquetes.includes(indice),
  );
  const marcados = extras.filter((extra) => elegidos[extra.j]);
  const total =
    paquete.precio +
    marcados.filter((x) => !x.mensual).reduce((suma, x) => suma + x.precio, 0);
  const mensual = marcados
    .filter((x) => x.mensual)
    .reduce((suma, x) => suma + x.precio, 0);
  const nombres = marcados.map((x) => x.nombre);

  const mensaje =
    `Hola Quark Studio, quiero cotizar el paquete ${paquete.nombre}` +
    (nombres.length ? ` con: ${nombres.join(", ")}` : "") +
    `. Estimado: ${dinero(total)}` +
    (mensual ? ` + ${dinero(mensual)}/mes` : "") +
    ".";

  function seguirMouse(e) {
    const caja = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - caja.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - caja.top}px`);
  }

  function alternarExtra(j) {
    setElegidos({ ...elegidos, [j]: !elegidos[j] });
  }

  return (
    <section id="paquetes">
      <div className="wrap">
        <h2>Paquetes para cada etapa de tu negocio</h2>
        <p className="sub">
          Elige un paquete, agrega lo que necesites y mira el estimado al
          instante. Precios de referencia en dólares.
        </p>
        <div className="builder">
          <div className="tabs" role="tablist">
            {PAQUETES.map((p, i) => (
              <button
                key={p.nombre}
                className={"tab" + (i === indice ? " on" : "")}
                role="tab"
                aria-selected={i === indice}
                onClick={() => setIndice(i)}
              >
                <b>{p.nombre}</b>
                <span>
                  {p.desde ? "Desde " : ""}
                  {dinero(p.precio)}
                </span>
                {p.recomendado && <em>Recomendado</em>}
              </button>
            ))}
          </div>

          <div
            className="detail glass"
            aria-live="polite"
            onMouseMove={seguirMouse}
          >
            <div className="dh">
              <h3>{paquete.nombre}</h3>
              <span className="chip">Entrega: {paquete.entrega}</span>
            </div>
            <p className="ideal">Ideal para {paquete.ideal}.</p>
            <ul className="ck">
              {paquete.incluye.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <h4>Personaliza tu combo</h4>
            <div className="sws">
              {extras.map((extra) => (
                <label className="sw" key={extra.j}>
                  <input
                    type="checkbox"
                    checked={!!elegidos[extra.j]}
                    onChange={() => alternarExtra(extra.j)}
                  />
                  <span>
                    {extra.nombre}{" "}
                    <i>
                      +{dinero(extra.precio)}
                      {extra.mensual ? "/mes" : ""}
                    </i>
                  </span>
                </label>
              ))}
            </div>
            <div className="tot">
              <div>
                <small>Estimado{paquete.desde ? " desde" : ""}</small>
                <b>{dinero(total)}</b>
                {mensual > 0 && <span>+ {dinero(mensual)}/mes</span>}
              </div>
              <a
                className="btn"
                href={urlWhatsapp(mensaje)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Cotizar este combo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
