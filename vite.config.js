import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

const isIgnored = (p) => {
  const segs = String(p).replace(/\\/g, "/").split("/");
  return (
    segs.includes(".shipstudio") ||
    segs.includes("node_modules") ||
    segs.includes(".git") ||
    segs.includes(".vite") ||
    segs.includes("dist")
  );
};

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    watch: {
      ignored: isIgnored,
      usePolling: true,
    },
  },
});