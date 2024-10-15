import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import prefresh from '@prefresh/vite';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/kasa/',
})
