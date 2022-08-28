import { defineConfig, loadEnv } from 'vite'
import solidPlugin from 'vite-plugin-solid';

export default defineConfig(({ command, mode }) => {
	const env = loadEnv(mode, process.cwd(), '')
	return {
		plugins: [solidPlugin()],
		server: {
			port: env.PORT,
			// host: "0.0.0.0",
		},
		build: {
			target: 'esnext',
		},
	}
});

