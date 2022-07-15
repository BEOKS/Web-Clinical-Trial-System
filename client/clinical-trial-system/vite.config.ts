import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
let HOST_LOCATION
if(process.env.VITE_API_HOST){
    HOST_LOCATION=process.env.VITE_API_HOST
}
else{
    HOST_LOCATION='beamcts-env.eba-a5zfayqe.us-west-1.elasticbeanstalk.com'
}
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
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
    },
    define:{
        'process.env':{}
    }
})
