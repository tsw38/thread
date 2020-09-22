import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story, Meta} from '@storybook/react/types-6-0'
import MasonryComponent from './Masonry'

import {MasonryElements} from './sample-data';

export default {
    title: 'Masonry/Grid',
    component: MasonryComponent,
} as Meta

export const Default = () => {
    const args = {
        elements: MasonryElements,
    }

    return <MasonryComponent {...args} />;
}