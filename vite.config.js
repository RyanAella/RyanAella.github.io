import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [vue()],
  base: process.env.NODE_ENV === "production" ? "/" : "/",
});
