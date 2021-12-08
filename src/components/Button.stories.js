import React from "react";

import Button from "./Button";




export default {
  component: Button,
    title: 'Button',
    argTypes: {
        handleClick: { action: 'handleClick' } },
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

export const Hover = Template.bind({});
Hover.parameters = {
    pseudo: { hover: true },
    grid: {
		columns: 3,
    },
}
Hover.args = {
    label: 'Cancel',
    primary: false,
    size: 'lg'
};

export const Focus = Template.bind({})
Focus.parameters = { pseudo: { focus: true } }
Focus.args = {
    label: 'Cancel',
    primary: false,
    size: 'lg'
};
export const Active = Template.bind({})
Active.parameters = { pseudo: { active: true } }
Active.args= {
    ...Focus.args
}