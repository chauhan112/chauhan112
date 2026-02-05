import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
    plugins: [tailwindcss()],
    base: './', // <--- Use relative path
    server: {
        host: '0.0.0.0',
        port: 5173,
        allowedHosts: ['p-5173.rajababu.space']
    }
});