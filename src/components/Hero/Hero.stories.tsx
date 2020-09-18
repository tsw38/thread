
import React from 'react';
import {Story, Meta} from '@storybook/react/types-6-0';
import HeroComponent from './Hero';

export default {
    title: 'Common',
    component: HeroComponent
} as Meta;

export const Hero = (args) => <HeroComponent {...args} />
Hero.args = {
    title: 'Clapton',
    author: 'Isabell Kraemer',
    img: {
        src: 'https://picsum.photos/400/500',
        alt: '',
    },
}
