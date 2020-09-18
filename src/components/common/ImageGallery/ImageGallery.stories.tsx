
import React from 'react';
import {Story, Meta} from '@storybook/react/types-6-0';
import ImageGalleryComponent from './ImageGallery';

// uncommment this line to include styles only for the story
// import styles from "./ImageGallery.stories.module.scss"

export default {
    title: 'Common/ImageGallery',
    component: ImageGalleryComponent
} as Meta;

export const Default = (args) => <ImageGalleryComponent {...args} />
Default.args = {
    images: [
        {
            src:
                'https://images.unsplash.com/photo-1593642532454-e138e28a63f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80',
            alt: 'Temp image',
        },
        {
            src:
                'https://images.unsplash.com/photo-1599996325261-4ee2c679a252?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80',
            alt: 'Temp image',
            primary: true,
        },
        {
            src:
                'https://images.unsplash.com/photo-1599997950611-4b13d9997517?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2251&q=80',
            alt: 'temp',
        },
        {
            src:
                'https://images.unsplash.com/photo-1599997950611-4b13d9997517?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2251&q=80',
            alt: 'temp',
        },
        {
            src:
                'https://images.unsplash.com/photo-1599993770939-4577bd72597f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80',
            alt: 'temp',
        },
    ],
}