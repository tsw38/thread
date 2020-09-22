import React from 'react'

import '@testing-library/jest-dom'
// NOTE: jest-dom adds handy assertions to Jest and is recommended, but not required

import {render, fireEvent, screen} from '@testing-library/react'
import Ribbon from './Ribbon'

describe('Ribbon', () => {
    it('renders properly', () => {
        const {getByTestId} = render(<Ribbon />)

        expect(getByTestId('Ribbon')).toBeTruthy()
    })
})
