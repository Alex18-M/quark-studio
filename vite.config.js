import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // En desarrollo, las llamadas a /api se envían al servidor Node (puerto 3001)
  server: { proxy: { "/api": "http://localhost:3001" } },
});
