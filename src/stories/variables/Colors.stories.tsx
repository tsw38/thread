import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story, Meta} from '@storybook/react/types-6-0'
import className from 'classnames'

export default {
    title: 'Common/Variables',
} as Meta

import styles from './colors.module.scss'
import {colors} from '../../types/color'

export const Colors = () => (
    <ul className={styles.ColorWrapper}>
        {colors.map((name, index) => (
            <li
                key={`color-${name}`}
                className={className(styles.Color, styles[`Color-${name}`])}
            >
                <div className={styles.Background} />
                <code>--{name}</code>
            </li>
        ))}
    </ul>
)