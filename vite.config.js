import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteImagemin from "vite-plugin-imagemin";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteImagemin({
      // GIF 최적화
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      // PNG 최적화
      optipng: {
        optimizationLevel: 7,
      },
      // PNG 손실 압축 (더 작은 용량)
      pngquant: {
        quality: [0.7, 0.9],
        speed: 4,
      },
      // JPEG 최적화
      mozjpeg: {
        quality: 80,
      },
      // SVG 최적화
      svgo: {
        plugins: [
          {
            name: "removeViewBox",
            active: false,
          },
          {
            name: "removeEmptyAttrs",
            active: false,
          },
        ],
      },
      // WebP 변환
      webp: {
        quality: 80,
      },
    }),
  ],
  base: "/", // GitHub Pages 경로
  build: {
    // 빌드 최적화 옵션 (esbuild 사용 - Vite 기본값, 더 빠름)
    minify: "esbuild",
    // 청크 크기 경고 한도 증가
    chunkSizeWarningLimit: 1000,
    // 롤업 옵션
    rollupOptions: {
      output: {
        // 청크 분리 전략
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"],
          icons: ["lucide-react"],
        },
      },
    },
  },
});
