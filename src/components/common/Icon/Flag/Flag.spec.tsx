import React from 'react'

import '@testing-library/jest-dom'
// NOTE: jest-dom adds handy assertions to Jest and is recommended, but not required

import {render, fireEvent, screen} from '@testing-library/react'
import Flag from './Flag'

describe('Flag', () => {
    it('renders properly', () => {
        const {getByTestId} = render(<Flag name="usa" />)

        expect(getByTestId('Flag-usa')).toBeTruthy()
    })

    it('renders null if no flag is found', () => {
        const {queryByTestId, debug} = render(<Flag name="florida" />)

        expect(queryByTestId('Flag-florida')).toBeFalsy()
    })
})
