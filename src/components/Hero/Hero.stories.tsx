
import React from 'react';
import {Story, Meta} from '@storybook/react/types-6-0';
import HeroComponent from './Hero';

export default {
    title: 'Hero',
    component: HeroComponent
} as Meta;

export const Default = (args) => <HeroComponent {...args} />
