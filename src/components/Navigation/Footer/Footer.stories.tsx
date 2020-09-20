
import React from 'react';
import {Story, Meta} from '@storybook/react/types-6-0';
import FooterComponent from './Footer';

// uncommment this line to include styles only for the story
// import styles from "./Footer.stories.module.scss"

export default {
    title: 'Footer',
    component: FooterComponent
} as Meta;

export const Default = (args) => <FooterComponent {...args} />
