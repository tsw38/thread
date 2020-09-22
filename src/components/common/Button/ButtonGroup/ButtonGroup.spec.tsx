import React from 'react'

import '@testing-library/jest-dom'

import {render, fireEvent, screen} from '@testing-library/react'
import Button from '../Button/Button';
import ButtonGroup from './ButtonGroup'

describe('Button Group', () => {
    it('renders properly', () => {
        const buttonText = 'Value'
        const {getByText} = render(
            <ButtonGroup>
                <Button>{buttonText}</Button>
                <Button>{buttonText} 2</Button>
            </ButtonGroup>
        )

        expect(getByText(buttonText)).toBeTruthy()
        expect(getByText(buttonText + ' 2')).toBeTruthy()
    })
})
