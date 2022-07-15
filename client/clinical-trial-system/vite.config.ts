import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        host: true,
        port: 3000,
        proxy: {
            '/api': {
                target: `http://${process.env.API_HOST}`,
                changeOrigin: true
            },
            '/oauth2': {
                target: `http://${process.env.API_HOST}`,
                changeOrigin: true
            },
        },
    },
})