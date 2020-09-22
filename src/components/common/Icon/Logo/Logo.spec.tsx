import React from 'react'

import '@testing-library/jest-dom'
// NOTE: jest-dom adds handy assertions to Jest and is recommended, but not required

import {render, fireEvent, screen} from '@testing-library/react'
import Logo from './Logo'

describe('Logo', () => {
    it('renders properly', () => {
        const {getByTestId} = render(<Logo />)

        expect(getByTestId('Logo')).toBeTruthy()
    })
})
