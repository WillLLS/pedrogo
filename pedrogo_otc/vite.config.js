import { fileURLToPath, URL } from 'url';
import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const root = resolve(__dirname, 'src')

export default defineConfig({
	root,
	plugins: [react()],
	resolve: {
		alias: {
			'@src': fileURLToPath(new URL('./src', import.meta.url)),
			'@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
			'@components': fileURLToPath(new URL('./src/components', import.meta.url)),
			'@node_modules': fileURLToPath(new URL('./node_modules', import.meta.url))
		}
	},
	build: {
		outDir: resolve(__dirname, 'dist'),
		emptyOutDir: true,
		rollupOptions: {
			input: {
				pedrogo: resolve(root, 'pedrogo', 'index.html')
			}
		}
	},
})
