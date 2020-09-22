import React from 'react'

import '@testing-library/jest-dom'
// NOTE: jest-dom adds handy assertions to Jest and is recommended, but not required

import {render, fireEvent, screen} from '@testing-library/react'
import ImageGallery from './ImageGallery'

describe('ImageGallery', () => {
    it('renders properly', () => {
        const images = [
            {
                src: 'src',
                alt: 'alt',
                primary: true,
            },
            {
                src: 'src',
                alt: 'alt',
            },
            {
                src: 'src',
                alt: 'alt',
            },
            {
                src: 'src',
                alt: 'alt',
            },
            {
                src: 'src',
                alt: 'alt',
            },
            {
                src: 'src',
                alt: 'alt',
            },
        ]
        const {getByTestId, queryByTestId} = render(
            <ImageGallery images={images} />
        )

        expect(getByTestId('ImageGallery-Primary')).toBeTruthy()

        images.forEach((image, index) => {
            if (index < 4) {
                expect(getByTestId(`ImageGallery-${index}`)).toBeTruthy()
            } else {
                expect(queryByTestId(`ImageGallery-${index}`)).toBeFalsy()
            }
        })
    })

    describe('no render', () => {
        it('wasnt provided images', () => {
            const {queryByTestId} = render(<ImageGallery images={[]} />)

            expect(queryByTestId('ImageGallery')).toBeFalsy()
        });
        it('wasnt provided primary image', () => {
            const {queryByTestId} = render(
                <ImageGallery
                    images={[
                        {
                            src: 'src',
                            alt: 'alt',
                        },
                    ]}
                />
            )

            expect(queryByTestId('ImageGallery')).toBeFalsy()
        })
    })
})
