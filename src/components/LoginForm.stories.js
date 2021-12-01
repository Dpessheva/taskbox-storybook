import React from "react";
import LoginForm from "./LoginForm";
import { within, userEvent } from '@storybook/testing-library';

export default {
  component: LoginForm,
  title: 'LoginForm',
  argTypes: { handleSubmit: { action: 'handleSubmit' } },
    parameters: {
    docs: {
      source: {
        type: 'code',
      },
     
      }
  },
};

const Template = args => <LoginForm {...args} />;

export const Default = Template.bind({});
Default.args = {
    profile: {}
}

export const FilledForm = Template.bind({});
FilledForm.args = {
    profile: {
     email: 'email@provider.com',
    password: 'a-random-password',
  },
}
// FilledForm.play = async ({ canvasElement }) => {
  // Starts querying the component from it's root element
  // const canvas = within(canvasElement);
  // console.log(canvasElement);

  // await userEvent.type(canvas.queryByTestId('email'), 'email@provider.com', {
  //   delay: 100,
  // });
  // await userEvent.type(canvas.queryByTestId('password'), 'a-random-password', {
  //   delay: 100,
  // });

  // See https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
  // await userEvent.click(canvas.getByRole('submit'));
// };