import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // GitHub Pages 프로젝트 사이트는 /저장소명/ 하위 경로로 서빙됨. 커스텀 도메인으로 옮기면 "/"로 변경
  base: "/spintotech/",
});
