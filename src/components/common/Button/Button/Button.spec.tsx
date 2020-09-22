import React from 'react'

import '@testing-library/jest-dom'
// NOTE: jest-dom adds handy assertions to Jest and is recommended, but not required

import {render, fireEvent, screen} from '@testing-library/react'
import Button from './Button';

// Ensure console error fails tests by replacing with a function that throws
const { error: originalError } = console;

describe('Button', () => {
    beforeAll(() => {
        jest.spyOn(console, 'error').mockImplementation((...args) => {
            originalError(...args)
            throw new Error()
        })
    })

    it('renders properly', () => {
        const buttonText = 'Value'
        const {getByText} = render(<Button>{buttonText}</Button>)

        expect(getByText(buttonText)).toBeTruthy()
    })
    it('renders disabled', () => {
        const buttonText = 'Value'
        const {getByText} = render(<Button disabled>{buttonText}</Button>)

        expect(getByText(buttonText).closest('button')).toBeDisabled()
    })
    it('throws error when unimplemented click', () => {
        const buttonText = 'Value'
        const {getByText} = render(<Button disabled>{buttonText}</Button>)

        fireEvent.click(getByText(buttonText))

    })
})