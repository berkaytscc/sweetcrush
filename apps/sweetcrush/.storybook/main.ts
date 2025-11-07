import type { StorybookConfig } from '@storybook/sveltekit';
import { main as sharedMain } from 'config-storybook';

const config: StorybookConfig = {
	...sharedMain,
	// Narrow patterns to just Svelte stories to avoid Vite importer mismatch
	stories: ['../src/**/*.stories.svelte'],
};

export default config;

