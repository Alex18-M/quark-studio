import { WHATSAPP } from "../data.js";

export function urlWhatsapp(texto) {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(texto)}`;
}

export function abrirWhatsapp(texto) {
  window.open(urlWhatsapp(texto), "_blank", "noopener");
}
