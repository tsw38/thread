
import React from 'react';
import {Story, Meta} from '@storybook/react/types-6-0';
import InputComponent from './Input';

// uncommment this line to include styles only for the story
// import styles from "./Input.stories.module.scss"

export default {
    title: 'Carbon/Input',
    component: InputComponent
} as Meta;

export const Default = (args) => <InputComponent {...args} />
Default.args = {
    id: 'tyler',
    labelText: 'TYLER WILLIAMS'
}