import React from 'react'
import InputItem from './InputItem';



export default {
  component: InputItem,
    title: 'InputItem',
    argTypes: {
        handleChange: { action: 'handleChange' } },
};


const Template = args => <InputItem {...args} />;

export const DefaultInput = Template.bind({});
export const DisabledInput = Template.bind({});
DisabledInput.args = {
    disabled:true
}