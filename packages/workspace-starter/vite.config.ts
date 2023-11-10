import { defineConfig } from 'vite';

export default defineConfig({
    base: '/epam-openfin-demo/workspace-starter',
    build: {
        outDir: '../../docs/workspace-starter',
        emptyOutDir: true
    }
});
