import React from 'react'

import '@testing-library/jest-dom'
// NOTE: jest-dom adds handy assertions to Jest and is recommended, but not required

import {render, fireEvent, screen} from '@testing-library/react'

import LoadingPortal from './LoadingPortal'

describe('LoadingPortal', () => {
    it('renders properly', () => {
        const {getByTestId} = render(<LoadingPortal/>)

        expect(getByTestId('LoadingPortal')).toBeTruthy()
        expect(getByTestId('Logo')).toBeTruthy()
    })
})
