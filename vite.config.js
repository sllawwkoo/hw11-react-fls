import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	css: {
		modules: {
			generateScopedName: "[name]__[local]__[hash:base64:5]",
		},
		// @use "@/assets/styles/_mixins.scss" as * - замість цього шляху в кожному файлі module.scss
		// він додається автоматично щоб працювали міксіни
		preprocessorOptions: {
			scss: {
				additionalData: `@use "@/assets/styles/_mixins.scss" as *;`,
			},
		},
	},
	resolve: {
		alias: {
			"@": "/src", // Відносний шлях до src
		},
	},
});
