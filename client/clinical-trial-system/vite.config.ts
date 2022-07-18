import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
let HOST_LOCATION
const config={
    plugins: [react()],
    define:{
        'process.env':{}
    }
}

if(process.env.VITE_API_HOST){
    config['server']={
        host: true,
        port: 3000,
        proxy: {
            '/api': {
                target: `http://${HOST_LOCATION}`,
                changeOrigin: true
            },
            '/oauth2': {
                target: `http://${HOST_LOCATION}`,
                changeOrigin: true
            },
        },
}
// https://vitejs.dev/config/
export default defineConfig(config)
