
import React from 'react';
import {Story, Meta} from '@storybook/react/types-6-0';
import MultiselectComponent from './Multiselect';

// uncommment this line to include styles only for the story
// import styles from "./Multiselect.stories.module.scss"

export default {
    title: 'Multiselect',
    component: MultiselectComponent
} as Meta;

export const Default = (args) => <MultiselectComponent {...args} />
