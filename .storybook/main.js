/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
	stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(js|jsx|ts|tsx)"],

	addons: [
		"@storybook/addon-onboarding",
		"@storybook/addon-a11y",
		"@storybook/addon-docs",
		"@storybook/addon-vitest",
		"@chromatic-com/storybook",
	],

	framework: {
		name: "@storybook/react-vite",
		options: {},
	},
};

export default config;
