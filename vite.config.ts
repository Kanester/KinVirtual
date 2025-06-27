import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
	build: {
		lib: {
			entry: resolve(__dirname, 'src/index.ts'),
			name: 'KinVirtual',
			filename: format => `kinvirtual.${format}.js`,
			formats: ['es', 'umd']
		},
		rollupOptions: {
			external: ['lit'],
			output: {
				globals: {
					lit: 'lit'
				}
			}
		}
	},
	resolve: {
		alias: {
			'@core': resolve(__dirname, 'src/core'),
			'@input': resolve(__dirname, 'src/input'),
			'@utils': resolve(__dirname, 'src/utils')
		}
	}
});
