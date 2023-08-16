import sveltePreprocess from 'svelte-preprocess';

const config = {
	preprocess: sveltePreprocess({
		scss: {
			// prependData: '@use "src/styles/vars.scss";'
		}
	})
};

export default config;
