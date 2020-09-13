import React from 'react';
import classNames from 'classnames';

import styles from './Logo.module.scss';
import ColorType from '../../../types/color';

export interface LogoProps {
    className?: string,
    /**
     * The color of the logo
     */
    color?: ColorType['color']
    /**
     * Flag that toggles spinning
     */
    loading?: boolean
    /**
     * Changes the logo to be mono color or not
     */
    mono?: boolean
}

const Logo: React.FC<LogoProps> = ({
    className,
    color = 'main',
    mono = false,
    loading = false,
}) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={classNames(
            styles.Logo,
            styles[`Logo--${color}${mono ? '-mono' : ''}`],
            loading && styles['Logo--loading'],
            className
        )}
        viewBox="0 0 184.25 184"
    >
        <path
            d="M83.78 72L52.49 24.16a4.33 4.33 0 017.25-4.74c.08.14.17.28.24.42l25.76 51a1.13 1.13 0 01-2 1.13z"
            className={styles['color-1']}
            transform="translate(-7.71 -6.05)"
        />
        <path
            d="M69.33 98.86l-57 3.19a4.33 4.33 0 11-.48-8.64h.48l57 3.19a1.13 1.13 0 010 2.26z"
            className={styles['color-1']}
            transform="translate(-7.71 -6.05)"
        />
        <path
            d="M85.39 124.81l-25.76 51a4.32 4.32 0 11-7.72-3.9 4.49 4.49 0 01.24-.42l31.29-47.81a1.13 1.13 0 012 1.13z"
            className={styles['color-1']}
            transform="translate(-7.71 -6.05)"
        />
        <path
            d="M115.9 123.88l31.29 47.81a4.33 4.33 0 01-7.24 4.74c-.09-.13-.17-.28-.25-.42l-25.76-51a1.13 1.13 0 012-1.13z"
            className={styles['color-1']}
            transform="translate(-7.71 -6.05)"
        />
        <path
            d="M115.9 123.88l31.29 47.81a4.33 4.33 0 01-7.24 4.74c-.09-.13-.17-.28-.25-.42l-25.76-51a1.13 1.13 0 012-1.13z"
            className={styles['color-1']}
            transform="translate(-7.71 -6.05)"
        />

        <path
            d="M115.9 123.88l31.29 47.81a4.33 4.33 0 01-7.24 4.74c-.09-.13-.17-.28-.25-.42l-25.76-51a1.13 1.13 0 012-1.13z"
            className={styles['color-1']}
            transform="translate(-7.71 -6.05)"
        />
        <path
            d="M130.35 97l57.05-3.2a4.33 4.33 0 01.48 8.65h-.48l-57.05-3.19a1.14 1.14 0 01-1.07-1.2 1.13 1.13 0 011.07-1.06z"
            className={styles['color-1']}
            transform="translate(-7.71 -6.05)"
        />
        <path
            d="M114.29 71l25.76-51a4.33 4.33 0 017.73 3.9 4.23 4.23 0 01-.25.42l-31.29 47.85a1.13 1.13 0 01-1.95-1.17z"
            className={styles['color-1']}
            transform="translate(-7.71 -6.05)"
        />

        <path
            d="M99.1 67.67l-3.19-57a4.33 4.33 0 018.65-.48v.48l-3.2 57.05a1.12 1.12 0 01-1.19 1.07 1.14 1.14 0 01-1.07-1.12z"
            className={styles['color-2']}
            transform="translate(-7.71 -6.05)"
        />
        <path
            d="M100.77 128.43l3.19 57a4.33 4.33 0 11-8.64.49 4 4 0 010-.49l3.19-57a1.13 1.13 0 012.26 0z"
            className={styles['color-2']}
            transform="translate(-7.71 -6.05)"
        />
        <path
            d="M73 83.48L22 57.72A4.33 4.33 0 1125.86 50l.42.24 47.81 31.28a1.14 1.14 0 01.32 1.57 1.12 1.12 0 01-1.41.39z"
            className={styles['color-2']}
            transform="translate(-7.71 -6.05)"
        />
        <path
            d="M126.73 112.38l51 25.76a4.33 4.33 0 11-3.91 7.72 3.38 3.38 0 01-.41-.24l-47.81-31.29a1.13 1.13 0 011.13-2z"
            className={styles['color-2']}
            transform="translate(-7.71 -6.05)"
        />
        <path
            d="M73.89 114l-47.81 31.28a4.33 4.33 0 11-4.74-7.28 3.38 3.38 0 01.41-.24l51-25.76a1.13 1.13 0 011.52.5 1.14 1.14 0 01-.38 1.5z"
            className={styles['color-2']}
            transform="translate(-7.71 -6.05)"
        />
        <path
            d="M125.8 81.87l47.8-31.29a4.33 4.33 0 114.75 7.24l-.42.25-51 25.75a1.13 1.13 0 01-1.12-1.95z"
            className={styles['color-2']}
            transform="translate(-7.71 -6.05)"
        />

        <path
            d="M90.61 68.82L71.53 14.87a6.07 6.07 0 1111.44-4 7.36 7.36 0 01.25.92L93.66 68a1.58 1.58 0 01-1.27 1.85 1.6 1.6 0 01-1.78-1.03z"
            className={styles['color-3']}
            transform="translate(-7.71 -6.05)"
        />
        <path
            d="M70 91.37L13.75 80.92A6.07 6.07 0 1116 69a7.36 7.36 0 01.92.25l53.91 19.06a1.59 1.59 0 01-.83 3.06z"
            className={styles['color-3']}
            transform="translate(-7.71 -6.05)"
        />
        <path
            d="M79.25 120.48L42.07 164a6.07 6.07 0 11-8.56-8.56L77 118.24a1.59 1.59 0 012.24 2.24z"
            className={styles['color-3']}
            transform="translate(-7.71 -6.05)"
        />
        <path
            d="M109.07 127l19.08 54a6.07 6.07 0 11-11.68 3.13L106 127.86a1.58 1.58 0 011.27-1.85 1.57 1.57 0 011.8.99z"
            className={styles['color-3']}
            transform="translate(-7.71 -6.05)"
        />
        <path
            d="M129.67 104.49l56.26 10.45a6.07 6.07 0 11-2.22 11.93 8.66 8.66 0 01-.91-.24l-54-19.09a1.58 1.58 0 01.82-3.05z"
            className={styles['color-3']}
            transform="translate(-7.71 -6.05)"
        />
        <path
            d="M120.44 75.38l37.17-43.5a6.07 6.07 0 019.23 7.89 7.06 7.06 0 01-.67.67l-43.5 37.18a1.59 1.59 0 01-2.23-2.24z"
            className={styles['color-3']}
            transform="translate(-7.71 -6.05)"
        />

        <path
            d="M77.29 77.33l-43.5-37.18a6.07 6.07 0 117.89-9.22 7.06 7.06 0 01.67.67l37.18 43.5a1.59 1.59 0 01-2.24 2.23z"
            className={styles['color-4']}
            transform="translate(-7.71 -6.05)"
        />
        <path
            d="M70.73 107.16l-53.95 19.08a6.07 6.07 0 01-4.05-11.44 6.65 6.65 0 01.92-.25l56.26-10.45a1.59 1.59 0 01.82 3.06z"
            className={styles['color-4']}
            transform="translate(-7.71 -6.05)"
        />
        <path
            d="M93.28 127.75L82.83 184a6.07 6.07 0 11-11.93-2.2 5.65 5.65 0 01.24-.92l19.09-53.95a1.58 1.58 0 013 .82z"
            className={styles['color-4']}
            transform="translate(-7.71 -6.05)"
        />
        <path
            d="M122.39 118.52l43.5 37.18a6.07 6.07 0 01-7.89 9.23 7.06 7.06 0 01-.67-.67l-37.18-43.5a1.59 1.59 0 012.24-2.24z"
            className={styles['color-4']}
            transform="translate(-7.71 -6.05)"
        />
        <path
            d="M129 88.7l54-19.09a6.07 6.07 0 014 11.45 6.24 6.24 0 01-.92.24l-56.31 10.45a1.58 1.58 0 01-.82-3z"
            className={styles['color-4']}
            transform="translate(-7.71 -6.05)"
        />
        <path
            d="M106.4 68.1l10.45-56.26a6.07 6.07 0 1111.93 2.22 5.53 5.53 0 01-.24.91l-19.08 54a1.59 1.59 0 01-3.06-.82z"
            className={styles['color-4']}
            transform="translate(-7.71 -6.05)"
        />
    </svg>
)

export default Logo;