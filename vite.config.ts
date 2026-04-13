/// <reference types="vitest/config" />
import babel from '@rolldown/plugin-babel';
import tailwindcss from '@tailwindcss/vite';
import react, { reactCompilerPreset } from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss(), babel({ presets: [reactCompilerPreset()] })],
    resolve: {
        tsconfigPaths: true,
    },
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './src/test_utils/setupTest.ts',
    },
});
