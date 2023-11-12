import { defineConfig } from 'vite';

export default defineConfig({
    base: '/epam-openfin-demo/portfolio-app',
    build: {
        outDir: '../../docs/portfolio-app',
        emptyOutDir: true
    }
});
