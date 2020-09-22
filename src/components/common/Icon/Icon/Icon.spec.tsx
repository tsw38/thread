import React from 'react'

import '@testing-library/jest-dom'
// NOTE: jest-dom adds handy assertions to Jest and is recommended, but not required

import {render, fireEvent, screen} from '@testing-library/react'
import Icon from './Icon'

describe('Icon', () => {
    it('renders properly', () => {
        const {getByTestId} = render(<Icon name="home" />)

        expect(getByTestId('Icon-home')).toBeTruthy()
    })

    it('renders null if no Icon is found', () => {
        const {queryByTestId} = render(<Icon name="florida" />)

        expect(queryByTestId('Icon-florida')).toBeFalsy()
    })
})
