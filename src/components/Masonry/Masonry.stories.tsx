import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story, Meta} from '@storybook/react/types-6-0'
import MasonryComponent from './Masonry'

export default {
    title: 'Masonry/Grid',
    component: MasonryComponent,
} as Meta

export const Default = () => {
    const args = {
        elements: [
            {
                url: '#some-url',
                title: 'Clapton',
                author: 'Isabelle Krimer',
                img: {
                    src: 'https://picsum.photos/100/200',
                },
            },
            {
                url: '#some-url',
                title: 'Clapton',
                author: 'Isabelle Krimer',
                img: {
                    src: 'https://picsum.photos/300/250',
                },
            },
            {
                url: '#some-url',
                title: 'Clapton',
                author: 'Isabelle Krimer',
                img: {
                    src: 'https://picsum.photos/250/300',
                },
            },
            {
                url: '#some-url',
                title: 'Clapton',
                author: 'Isabelle Krimer',
                img: {
                    src: 'https://picsum.photos/200/400',
                },
            },
            {
                url: '#some-url',
                title: 'Clapton',
                author: 'Isabelle Krimer',
                img: {
                    src: 'https://picsum.photos/200/500',
                },
            },
            {
                url: '#some-url',
                title: 'Clapton',
                author: 'Isabelle Krimer',
                img: {
                    src: 'https://picsum.photos/100/200',
                },
            },
            {
                url: '#some-url',
                title: 'Clapton',
                author: 'Isabelle Krimer',
                img: {
                    src: 'https://picsum.photos/300/250',
                },
            },
            {
                url: '#some-url',
                title: 'Clapton',
                author: 'Isabelle Krimer',
                img: {
                    src: 'https://picsum.photos/250/300',
                },
            },
            {
                url: '#some-url',
                title: 'Clapton',
                author: 'Isabelle Krimer',
                img: {
                    src: 'https://picsum.photos/200/400',
                },
            },
            {
                url: '#some-url',
                title: 'Clapton',
                author: 'Isabelle Krimer',
                img: {
                    src: 'https://picsum.photos/200/500',
                },
            },
        ],
    }

    return <MasonryComponent {...args} />;
}