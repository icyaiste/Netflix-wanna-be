/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // base: "/Netflix-wanna-be/",
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test/setup.ts",
    // you might want to disable it, if you don't have tests that rely on CSS
    // since parsing CSS is slow
    css: true,
  },
});
