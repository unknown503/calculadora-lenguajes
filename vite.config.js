import { defineConfig, loadEnv } from 'vite'
import solidPlugin from 'vite-plugin-solid';

export default defineConfig(({ _, mode }) => {
	const env = loadEnv(mode, process.cwd(), '')
	return {
		plugins: [solidPlugin()],
		server: {
			port: env.PORT || 3000,
			host: "0.0.0.0",
		},
		build: {
			target: 'esnext',
		},
	}
});

