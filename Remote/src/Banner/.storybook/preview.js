/** @type { import('@storybook/react').Preview } */
import { addParameters } from '@storybook/react'

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

// /** @type { import('@storybook/react').Preview } */
// import { withKnobs } from '@storybook/addon-knobs';
// import { withA11y } from '@storybook/addon-a11y';
// import { withBackgrounds } from '@storybook/addon-backgrounds';
 
// const preview = {
//   parameters: {
//     controls: {
//       matchers: {
//         color: /(background|color)$/i,
//         date: /Date$/i,
//       },
//     },
//     backgrounds: {
//       default: 'white',
//       values: [
//         { name: 'white', value: '#ffffff' },
//         { name: 'gray', value: '#cccccc' },
//         { name: 'black', value: '#000000' },
//       ],
//     },
//     //actions: { argTypesRegex: '^on.*' },
//     viewport: {
//       viewports: {
//         small: {
//           name: 'Small screen',
//           styles: { width: '320px', height: '640px' },
//         },
//         medium: {
//           name: 'Medium screen',
//           styles: { width: '768px', height: '1024px' },
//         },
//         large: {
//           name: 'Large screen',
//           styles: { width: '1024px', height: '1366px' },
//         },
//       },
//     },
//     docs: {
//       inlineStories: true,
//       iframeHeight: 60,
//     },
//     storySource: {
//       loaderOptions: {
//         injectStoryParameters: true,
//       },
//     },
//   },
//   decorators: [
//     withA11y,
//     withKnobs,
//     withBackgrounds,
    
//   ],
// };
 

 
// export default preview;
