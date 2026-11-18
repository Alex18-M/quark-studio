import { useEffect, useRef } from "react";

export default function Fondo() {
  const lienzo = useRef(null);
  const capa2 = useRef(null);
  const capa3 = useRef(null);

  useEffect(() => {
    const canvas = lienzo.current;
    const ctx = canvas.getContext("2d");
    const reducirMovimiento = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    let estrellas = [];
    let ancho = 0;
    let alto = 0;
    let animacion = 0;

    function iniciar() {
      ancho = canvas.width = window.innerWidth;
      alto = canvas.height = window.innerHeight;
      const cantidad = Math.round((ancho * alto) / 5200);
      estrellas = Array.from({ length: cantidad }, () => {
        const z = Math.random();
        return {
          x: Math.random() * ancho,
          y: Math.random() * alto,
          z,
          r: 0.4 + z * 1.3,
          t: Math.random() * 6.28,
        };
      });
    }

    function dibujar(tiempo) {
      ctx.clearRect(0, 0, ancho, alto);
      const scroll = window.scrollY;
      const maximo = document.documentElement.scrollHeight - alto;
      const progreso = maximo > 0 ? Math.min(1, scroll / maximo) : 0;
      capa2.current.style.opacity = Math.max(0, (progreso - 0.55) / 0.45);
      capa3.current.style.opacity = Math.sin(Math.PI * progreso) * 0.55;

      for (const e of estrellas) {
        const y = (((e.y - scroll * (0.05 + e.z * 0.4)) % alto) + alto) % alto;
        let brillo = 0.3 + 0.7 * e.z;
        if (!reducirMovimiento)
          brillo *= 0.75 + 0.25 * Math.sin(tiempo / 900 + e.t);
        ctx.globalAlpha = brillo;
        ctx.fillStyle = e.z > 0.8 ? "#cfd8ff" : "#fff";
        ctx.beginPath();
        ctx.arc(e.x, y, e.r, 0, 6.283);
        ctx.fill();
      }
      animacion = requestAnimationFrame(dibujar);
    }

    iniciar();
    animacion = requestAnimationFrame(dibujar);
    window.addEventListener("resize", iniciar);
    return () => {
      cancelAnimationFrame(animacion);
      window.removeEventListener("resize", iniciar);
    };
  }, []);

  return (
    <div id="sky">
      <i className="l1" />
      <i className="l2" ref={capa2} />
      <i className="l3" ref={capa3} />
      <canvas id="stars" ref={lienzo} />
    </div>
  );
}
