module.exports = {
  stories: ['../src/components/**/*.stories.js'],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    '@storybook/addon-a11y',
    '@storybook/addon-interactions'
  ],
  features: {
    interactionsDebugger: true,
  },
}

// export const globalTypes = {
//   theme: {
//     name: 'Theme',
//     description: 'Global theme for components',
//     defaultValue: 'light',
//     toolbar: {
//       icon: 'circlehollow',
//       // Array of plain string values or MenuItem shape (see below)
//       items: ['light', 'dark'],
//       // Property that specifies if the name of the item will be displayed
//       showName: true,
//     },
//   },
// };