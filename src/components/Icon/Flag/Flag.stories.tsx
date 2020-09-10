
import React from 'react';
import {Story, Meta} from '@storybook/react/types-6-0';
import FlagComponent from './Flag';

export default {
    title: 'Flag',
    component: FlagComponent
} as Meta;

export const Default = (args) => <FlagComponent {...args} />
