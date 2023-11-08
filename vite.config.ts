import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	optimizeDeps: {
		exclude: [
			'@jsquash/avif',
			'@jsquash/jpeg',
			'@jsquash/jxl',
			'@jsquash/png',
			'@jsquash/resize',
			'@jsquash/webp'
		]
	}
});
