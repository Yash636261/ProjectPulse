import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import image from 'vite-plugin-image';

export default defineConfig({
  plugins: [react(), image()],
});
