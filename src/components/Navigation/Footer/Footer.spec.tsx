import React from 'react'

import '@testing-library/jest-dom'
// NOTE: jest-dom adds handy assertions to Jest and is recommended, but not required

import {render, fireEvent, screen} from '@testing-library/react'
import Footer from './Footer'


describe('Footer', () => {
    it('renders properly', () => {
        const content = "Some text";
        const {getByText} = render(<Footer>{content}</Footer>)

        expect(getByText(content)).toBeTruthy()
    })
})
