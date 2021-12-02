import React from "react";


import ButtonGroup from "./ButtonGroup";
import * as ButtonStories from './Button.stories';

export default {
  component: ButtonGroup,
  title: 'ButtonGroup',
//   argTypes: { handleSubmit: { action: 'handleSubmit' } },
//     parameters: {
//     docs: {
//       source: {
//         type: 'code',
//       },
     
//       }
//   },
};

const Template = (args) => <ButtonGroup {...args} />;

export const Pair = Template.bind({});
Pair.args = {
  buttons: [
      { ...ButtonStories.Primary.args },
      { ...ButtonStories.Secondary.args },
  ],
  orientation: 'horizontal',
};