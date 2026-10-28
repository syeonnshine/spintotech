import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Cloudflare Pages는 루트(/)로 서빙하므로 base 설정 불필요
export default defineConfig({
  plugins: [react()],
});
