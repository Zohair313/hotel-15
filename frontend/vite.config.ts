import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { APP_BASENAME } from './vite.constants'

export default defineConfig({
  plugins: [react()],
  base: APP_BASENAME,
})
