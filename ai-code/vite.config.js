import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@monaco-editor/react': '@monaco-editor/react'
    }
  },
  optimizeDeps: {
    include: ['@monaco-editor/react']
  }
})