import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'index.tsx'),
      name: 'EmailEditor',
      fileName: 'index',
      formats: ['es']
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        '@mui/material',
        '@mui/icons-material',
        '@emotion/react',
        '@emotion/styled',
        '@emotion/core',
        '@usewaypoint/block-avatar',
        '@usewaypoint/block-button',
        '@usewaypoint/block-columns-container',
        '@usewaypoint/block-container',
        '@usewaypoint/block-divider',
        '@usewaypoint/block-heading',
        '@usewaypoint/block-html',
        '@usewaypoint/block-image',
        '@usewaypoint/block-spacer',
        '@usewaypoint/block-text',
        '@usewaypoint/document-core',
        '@usewaypoint/email-builder'
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          '@mui/material': 'MaterialUI',
          '@emotion/react': 'EmotionReact',
          '@emotion/styled': 'EmotionStyled'
        },
        preserveModules: false
      }
    },
    sourcemap: true,
    emptyOutDir: true
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
});