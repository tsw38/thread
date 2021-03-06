import React from 'react'

import '@testing-library/jest-dom'
// NOTE: jest-dom adds handy assertions to Jest and is recommended, but not required

import {render, fireEvent, screen} from '@testing-library/react'

import Container from './Container'

describe('Container', () => {
    it('renders properly', () => {
        const {getByTestId} = render(<Container>Container</Container>)

        expect(getByTestId('Container')).toBeTruthy()
    })
})
