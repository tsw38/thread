import React from 'react'

import '@testing-library/jest-dom'
// NOTE: jest-dom adds handy assertions to Jest and is recommended, but not required

import {render, fireEvent, screen} from '@testing-library/react'

import RichText from './RichText'

describe('RichText', () => {
    it('renders properly with children', () => {
        const html = 'Some html goes in here'
        const {getByText} = render(
            <RichText>{`<p>${html}</p>`}</RichText>
        );

        expect(getByText(html)).toBeTruthy()
    })

    it('renders properly with attribute', () => {
        const html = 'Some html goes in here'
        const {getByText} = render(<RichText html={`<p>${html}</p>`} />)

        expect(getByText(html)).toBeTruthy()
    })
})
