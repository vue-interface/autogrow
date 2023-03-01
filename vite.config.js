import vue from '@vitejs/plugin-vue';
import { pascalCase } from 'change-case';
import path from 'path';
import { defineConfig } from 'vite';
import pkg from './package.json';

const fileName = pkg.name.split('/')[1];

const external = [
    ...(pkg.dependencies ? Object.keys(pkg.dependencies) : []),
    ...(pkg.peerDependencies ? Object.keys(pkg.peerDependencies) : [])
];

export default defineConfig({
    optimizeDeps: {
        exclude: ['@vue-interface/activity-indicator']
    },
    build: {
        sourcemap: true,
        lib: {
            entry: path.resolve(__dirname, 'index.ts'),
            name: pascalCase(fileName),
            fileName,
        },
        rollupOptions: {
            external
        },
        watch: !process.env.NODE_ENV && {
            include: [
                './tailwindcss/**/*.js'
            ]
        }
    },
    plugins: [
        vue()
    ],
});