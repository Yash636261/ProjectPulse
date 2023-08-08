import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import image from 'vite-plugin-image'
import reactRouterPlugin from '@vitejs/plugin-react-router'

export default defineConfig({
  plugins: [react(), image(), reactRouterPlugin()],
})
