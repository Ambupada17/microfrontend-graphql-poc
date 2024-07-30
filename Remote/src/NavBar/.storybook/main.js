/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
    "@storybook/addon-viewport"
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  webpackFinal: async (config) => {
    // Find the default rule that handles styles
    const styleRule = config.module.rules.find(
      (rule) => rule.test && rule.test.toString().includes('css')
    );
 
    // Exclude .scss files from the default rule
    styleRule.exclude = /\.scss$/;
 
    // Add SCSS rule
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader', // Injects styles into DOM
        'css-loader',   // Turns css into commonjs
        'sass-loader',  // Turns sass into css
      ],
    });
 
    return config;
  },
};
export default config;
