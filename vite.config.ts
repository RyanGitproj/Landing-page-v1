import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Configuration Vite pour Célébrations Voyages France
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
});
