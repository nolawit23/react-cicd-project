import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'happy-dom',
    environmentOptions: {
      happyDOM: {
        settings: {
          navigator: {
            userAgent: 'node.js'
          }
        }
      }
    },
    globals: true,
    setupFiles: './src/setupTests.jsx',
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/*.backup.*',
      '**/debug-*',
      '**/test-*',
      '**/setup-*',
      '**/check-*'
    ],
    include: ['src/App.test.jsx']
  }
});
