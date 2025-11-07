import type { Preview } from '@storybook/svelte';
import { preview as sharedPreview } from 'config-storybook';

const preview: Preview = {
	...sharedPreview,
};

export default preview;

