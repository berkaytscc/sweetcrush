import type { Preview } from '@storybook/svelte';

const preview: Preview = {
	parameters: {
		layout: 'fullscreen',
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		viewport: {
			options: {
				stake: {
					name: 'Desktop',
					styles: {
						width: '1200px',
						height: '675px',
					},
				},
				stakeLaptop: {
					name: 'Laptop',
					styles: {
						width: '1024px',
						height: '576px',
					},
				},
				stakeMini: {
					name: 'Popout S',
					styles: {
						width: '400px',
						height: '225px',
					},
				},
				stakeMiniExpanded: {
					name: 'Popout L',
					styles: {
						width: '800px',
						height: '450px',
					},
				},
				mobileLarge: {
					name: 'Mobile L',
					styles: {
						width: '425px',
						height: '812px',
					},
				},
				mobileMedium: {
					name: 'Mobile M',
					styles: {
						width: '375px',
						height: '667px',
					},
				},
				mobileSmall: {
					name: 'Mobile S',
					styles: {
						width: '320px',
						height: '568px',
					},
				},
			},
		},
	},
	initialGlobals: {
		viewport: { value: 'stake', isRotated: false },
	},
};

export default preview;
