import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/innernote-statistics/', // ← 이 줄이 하얀 빈 화면을 한방에 고쳐주는 핵심 치트키입니다!
})
