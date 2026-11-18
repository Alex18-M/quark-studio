import { useEffect, useState } from "react";
import Fondo from "./components/Fondo.jsx";
import Encabezado from "./components/Encabezado.jsx";
import Paquetes from "./components/Paquetes.jsx";
import Nosotros from "./components/Nosotros.jsx";
import Contacto from "./components/Contacto.jsx";
import Panel from "./components/Panel.jsx";
import {
  Hero,
  Sectores,
  Servicios,
  Portafolio,
  Proceso,
  PorQue,
  Banda,
  Pie,
  BotonWhatsapp,
} from "./components/Secciones.jsx";

function useVistaPanel() {
  const [enPanel, setEnPanel] = useState(
    () => window.location.hash === "#panel",
  );
  useEffect(() => {
    const alCambiar = () => setEnPanel(window.location.hash === "#panel");
    window.addEventListener("hashchange", alCambiar);
    return () => window.removeEventListener("hashchange", alCambiar);
  }, []);
  return enPanel;
}

export default function App() {
  const enPanel = useVistaPanel();

  useEffect(() => {
    if (enPanel) {
      window.scrollTo(0, 0);
      return;
    }
    const id = window.location.hash.slice(1);
    const destino = id ? document.getElementById(id) : null;
    if (destino) destino.scrollIntoView();
  }, [enPanel]);

  return (
    <>
      <Fondo />
      <Encabezado />
      {enPanel ? (
        <Panel />
      ) : (
        <main id="site">
          <Hero />
          <Sectores />
          <Servicios />
          <Paquetes />
          <Portafolio />
          <Proceso />
          <PorQue />
          <Nosotros />
          <Banda />
          <Contacto />
          <Pie />
          <BotonWhatsapp />
        </main>
      )}
    </>
  );
}
