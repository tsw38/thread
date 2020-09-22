import React from 'react'

import '@testing-library/jest-dom'
// NOTE: jest-dom adds handy assertions to Jest and is recommended, but not required

import {render, fireEvent, screen} from '@testing-library/react'
import Column from './Column'

describe('Column', () => {
    it('renders properly', () => {
        const {getByTestId} = render(<Column>Column</Column>);

        expect(getByTestId('Column')).toBeTruthy()
    })
    it('renders multiple columns', () => {
        const {getAllByTestId} = render(
            <>
                <Column>Column</Column>
                <Column>Column</Column>
                <Column>Column</Column>
                <Column>Column</Column>
            </>
        )

        expect(getAllByTestId('Column')).toHaveLength(4)
    })
})
