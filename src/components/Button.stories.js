import React from "react";

import Button from "./Button";




export default {
  component: Button,
    title: 'Button',
    // argTypes: {
    //     handleSubmit: { action: 'handleSubmit' } },
};


const Template = args => <Button {...args} />;


export const Primary = Template.bind({});
Primary.args = {
    primary:true,
    label: 'Save',
    size:'lg'
}

export const Secondary = Template.bind({});
Secondary.args = {
    label: 'Cancel',
    primary: false,
    backgroundColor: 'red',
    size:'lg'
};