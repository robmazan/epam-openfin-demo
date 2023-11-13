import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    base: '/epam-openfin-demo/portfolio-app',
    plugins: [react()],
    build: {
        outDir: '../../docs/portfolio-app',
        emptyOutDir: true
    }
});
