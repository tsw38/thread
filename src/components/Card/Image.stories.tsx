import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story, Meta} from '@storybook/react/types-6-0';
import ImageComponent from './Image';

export default {
    title: 'Masonry/ImageCard',
    component: ImageComponent
} as Meta;

export const Default = (args) => <ImageComponent {...args} />
Default.args = {
    title: 'Clapton',
    author: 'Isabell Kraemer',
    url: '#/pattern/some-pattern-name',
    img: {
        src: 'https://picsum.photos/400/500',
        alt: ''
    },
}
