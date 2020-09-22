import React from 'react'

import '@testing-library/jest-dom'
// NOTE: jest-dom adds handy assertions to Jest and is recommended, but not required

import {render, fireEvent, screen} from '@testing-library/react'

import Hero from './Hero'

describe('Hero', () => {
    it('renders properly', () => {
        const title = "Clapton";
        const author = "Eric";

        const {getByText} = render(
            <Hero img={{
                src: 'src',
                alt: 'alt'
            }} title={title} author={author} />
        );

        expect(getByText(title)).toBeTruthy()
        expect(getByText(author)).toBeTruthy()
    })

    describe('it doesnt render', () => {
        it('has no title', () => {
            const author = 'Eric'

            const {queryByTestId} = render(
                <Hero
                    img={{
                        src: 'src',
                        alt: 'alt',
                    }}
                    title=""
                    author={author}
                />
            )

            expect(queryByTestId('Hero')).toBeFalsy()
        })

        it('has no author', () => {
            const {queryByTestId} = render(
                <Hero
                    img={{
                        src: 'src',
                        alt: 'alt',
                    }}
                    title=""
                    author=""
                />
            )

            expect(queryByTestId('Hero')).toBeFalsy()
        })
    })
})