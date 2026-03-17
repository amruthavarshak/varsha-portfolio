
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'Varsha Kurella | Portfolio',
        short_name: 'Varsha',
        description: 'Developer portfolio of Varsha Kurella',
        theme_color: '#0f172a',
        background_color: '#0b1020',
        display: 'standalone',
        icons: [
          { src: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: '/icons/icon-512.png', sizes: '512x512', type: 'image/png' }
        ]
      },
      workbox: { navigateFallback: '/offline.html' }
    })
  ],
  server: { port: 5173 },
})
