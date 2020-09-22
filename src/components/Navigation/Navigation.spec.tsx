import React from 'react'

import '@testing-library/jest-dom'
// NOTE: jest-dom adds handy assertions to Jest and is recommended, but not required

import {render, fireEvent, screen} from '@testing-library/react'
import Navigation from './Navigation'

describe('Navigation', () => {
    it('renders properly', () => {
        const {getByText, getAllByTestId, getByTestId, debug} = render(
            <Navigation />
        )

        expect(getAllByTestId('Ribbon')).toHaveLength(2)
        expect(getByTestId('Logo')).toBeTruthy()
        expect(getByText('thread')).toBeTruthy()
    })
})
