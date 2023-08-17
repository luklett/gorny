import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), dts({ include: ['lib'] })],
	build: {
		rollupOptions: {
			external: ['react', 'react/jsx-runtime'],
			moduleContext(id) {
				if (id.includes('node_modules')) {
					return 'global';
				}
			},
		},
		lib: {
			entry: resolve(__dirname, 'lib/main.ts'),
			formats: ['es'],
			fileName: 'main',
		},
	},
});
