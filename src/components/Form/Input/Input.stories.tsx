
import React from 'react';
import {Story, Meta} from '@storybook/react/types-6-0';
import InputComponent from './Input';

// uncommment this line to include styles only for the story
// import styles from "./Input.stories.module.scss"

export default {
    title: 'Form/Input',
    component: InputComponent
} as Meta;

const Template = (args) => <InputComponent {...args} />

export const Text = Template.bind({});
Text.args = {
    name: 'firstName',
    label: 'First Name'
}

export const Phone = Template.bind({})
Phone.args = {
    type: 'tel',
    name: 'phone',
    label: 'Phone Number',
    placeholder: '123-456-7890'
}

export const Email = Template.bind({})
Email.args = {
    type: 'email',
    name: 'email',
    label: 'Email',
}

export const Password = Template.bind({})
Password.args = {
    type: 'password',
    name: 'password',
    label: 'Password',
}

export const Number = Template.bind({})
Number.args = {
    type: 'number',
    name: 'number',
    label: 'Number',
}

export const Radio = Template.bind({})
Radio.args = {
    type: 'radio',
    name: 'gender',
    label: 'Gender',
}

export const Checkbox = Template.bind({})
Checkbox.args = {
    type: 'checkbox',
    name: 'color',
    label: 'Red',
}

export const File = Template.bind({})
File.args = {
    type: 'file',
    name: 'file',
    label: 'Primary Image',
}

// export const Checkbox = args => <InputComponent