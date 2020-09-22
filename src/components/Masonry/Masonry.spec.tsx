import React from 'react'

import '@testing-library/jest-dom'
// NOTE: jest-dom adds handy assertions to Jest and is recommended, but not required

import {render, fireEvent, screen} from '@testing-library/react'
import Masonry from './Masonry'

import {MasonryElements} from './sample-data'

describe('Masonry', () => {
    it('renders properly', () => {
        const {getAllByTestId} = render(
            <Masonry elements={MasonryElements} />
        )

        expect(getAllByTestId('ImageCard')).toHaveLength(MasonryElements.length)
    })

    it('does not render when no elements', () => {
        const {queryByTestId} = render(<Masonry elements={[]} />)

        expect(queryByTestId('Masonry')).toBeFalsy()
    })
})
