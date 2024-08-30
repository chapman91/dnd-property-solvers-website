// vite.config.js
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
    // imports of 'process' will use the polyfill from 'process/browser'
    resolve: {
        alias: {
            process: path.resolve(__dirname, 'node_modules/process/browser')
        },
    },

    define: {
        'process.env': {},
    },
    
    // Define yourVite configuration here
    root: './',
    build: {
        outDir: 'dist',
        emptyOutDir: true,
        rollupOtions: {
            input: {
                main: './index.html'
            }
        }
    },
    server: {
        open: true
    }
});