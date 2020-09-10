
import React from 'react';
import {Story, Meta} from '@storybook/react/types-6-0';
import ButtonComponent from './Button';

export default {
    title: 'Button',
    component: ButtonComponent
} as Meta;

export const Default = (args) => <ButtonComponent {...args} />
