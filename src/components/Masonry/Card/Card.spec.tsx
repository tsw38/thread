import React from 'react'

import '@testing-library/jest-dom'
// NOTE: jest-dom adds handy assertions to Jest and is recommended, but not required

import {render, fireEvent, screen} from '@testing-library/react'
import ImageCard from './Image'

const args = {
    title: 'Clapton',
    author: 'Isabell Kraemer',
    url: '#/pattern/some-pattern-name',
    img: {
        src: 'https://picsum.photos/400/500',
        alt: ''
    },
}

describe('ImageCard', () => {
    it('renders properly', () => {
        const {getByTestId, getByText} = render(<ImageCard {...args} />)

        expect(getByTestId('ImageCard')).toBeTruthy()
        expect(getByTestId('Logo')).toBeTruthy()
        expect(getByText(args.title)).toBeTruthy()
        expect(getByText(args.author)).toBeTruthy()
    })

    it('renders properly - with no title', () => {
        const noTitle = {...args};
        delete noTitle.title;

        const {queryByTestId} = render(<ImageCard {...noTitle} />)

        expect(queryByTestId('Title')).toBeFalsy()
    })

    it('renders properly - with no author', () => {
        const noAuthor = {...args}
        delete noAuthor.author

        const {queryByTestId} = render(
            <ImageCard {...noAuthor} />
        )

        expect(queryByTestId('Author')).toBeFalsy()
    })
})
