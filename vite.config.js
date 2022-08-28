import { defineConfig, loadEnv } from 'vite'
import solidPlugin from 'vite-plugin-solid';

export default defineConfig(({ command, mode }) => {
	const env = loadEnv(mode, process.cwd(), '')
	return {
		define: {
			PORT: env.VITE_PORT
		},
		plugins: [solidPlugin()],
		server: {
			port: env.PORT,
			// port: 3000,
			base: "https://calculadora-lenguajes-production.up.railway.app/"
		},
		build: {
			target: 'esnext',
		},
	}
});

