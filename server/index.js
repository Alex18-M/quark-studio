import express from "express";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { PAQUETES, EXTRAS } from "../src/data.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const carpetaDist = path.join(__dirname, "..", "dist");
const archivoMensajes = path.join(__dirname, "mensajes.json");
const PUERTO = process.env.PORT || 3001;

const app = express();
app.use(express.json({ limit: "10kb" }));

app.get("/api/salud", (req, res) => res.json({ ok: true }));
app.get("/api/paquetes", (req, res) =>
  res.json({ paquetes: PAQUETES, extras: EXTRAS }),
);

const limpiar = (valor, max) =>
  String(valor ?? "")
    .trim()
    .slice(0, max);

// Guarda los mensajes del formulario en un archivo JSON (demo; en producción usa una base de datos)
app.post("/api/contacto", async (req, res) => {
  const mensaje = {
    nombre: limpiar(req.body?.nombre, 100),
    negocio: limpiar(req.body?.negocio, 100),
    necesidad: limpiar(req.body?.necesidad, 100),
    mensaje: limpiar(req.body?.mensaje, 1000),
    fecha: new Date().toISOString(),
  };
  if (!mensaje.nombre)
    return res.status(400).json({ error: "El nombre es obligatorio" });

  try {
    let lista = [];
    try {
      lista = JSON.parse(await fs.readFile(archivoMensajes, "utf8"));
    } catch {
      // Todavía no existe el archivo: es el primer mensaje
    }
    lista.push(mensaje);
    await fs.writeFile(archivoMensajes, JSON.stringify(lista, null, 2));
    res.status(201).json({ ok: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "No se pudo guardar el mensaje" });
  }
});

app.use("/api", (req, res) => res.status(404).json({ error: "No encontrado" }));

// Sitio ya compilado (npm run build)
app.use(express.static(carpetaDist));
app.use((req, res) => res.sendFile(path.join(carpetaDist, "index.html")));

app.listen(PUERTO, () =>
  console.log(`Quark Studio en http://localhost:${PUERTO}`),
);
