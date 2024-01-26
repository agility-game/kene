import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	vite: {
		define: {
			"process.env.GH_TOKEN": process.env.VITE_GH_TOKEN,
			"process.env.owner": process.env.VITE_owner,
			"process.env.repo": process.env.VITE_repo
		}
	},
	plugins: [
		sveltekit(),

	]
});

/** @type {import('vite').UserConfig} */
/** const config = {
	plugins: [sveltekit()]
};

export default config;
*/
