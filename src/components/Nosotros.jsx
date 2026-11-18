import { Fragment, useEffect, useRef, useState } from "react";
import { TEXTO_NOSOTROS, PREGUNTAS } from "../data.js";

export default function Nosotros() {
  const parrafo = useRef(null);
  const [encendidas, setEncendidas] = useState(0);
  const palabras = TEXTO_NOSOTROS.trim().split(/\s+/);

  useEffect(() => {
    function actualizar() {
      const caja = parrafo.current.getBoundingClientRect();
      const alto = window.innerHeight;
      const progreso = Math.max(
        0,
        Math.min(1, (alto * 0.8 - caja.top) / (caja.height + alto * 0.25)),
      );
      setEncendidas(Math.round(progreso * palabras.length));
    }
    actualizar();
    window.addEventListener("scroll", actualizar, { passive: true });
    window.addEventListener("resize", actualizar);
    return () => {
      window.removeEventListener("scroll", actualizar);
      window.removeEventListener("resize", actualizar);
    };
  }, [palabras.length]);

  return (
    <section id="nosotros">
      <div className="wrap">
        <p className="reveal" ref={parrafo}>
          {palabras.map((palabra, i) => (
            <Fragment key={i}>
              {i > 0 && " "}
              <span className={i < encendidas ? "on" : undefined}>
                {palabra}
              </span>
            </Fragment>
          ))}
        </p>
        <div style={{ marginTop: "56px" }}>
          {PREGUNTAS.map(([pregunta, respuesta]) => (
            <details key={pregunta}>
              <summary>{pregunta}</summary>
              <p>{respuesta}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
