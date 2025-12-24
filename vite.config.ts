import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    // Add this block to allow your Easypanel host
    allowedHosts: [
      "labz-sas.bnif1n.easypanel.host"
    ],
  },
  // If the error specifically mentioned preview.allowedHosts:
  preview: {
    allowedHosts: [
      "labz-sas.bnif1n.easypanel.host"
    ],
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
