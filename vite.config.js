import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react({
      jsxImportSource: "react", // Required for React 19
      babel: false, // 🚀 Disable Babel, prevent errors
    }),
    tailwindcss(),
  ],
  optimizeDeps: {
    include: ["react", "react-dom"],
  },
});
