import React from 'react'
import classNames from 'classnames'

import ColorType from '../../types/color'

import styles from './Ribbon.module.scss'

export interface RibbonProps {
    children?: React.ReactNode
    /**
     * Ribbon color
     */
    color?: ColorType['color']
}

/**
 * Primary UI component for user interaction
 */
const Ribbon: React.FC<RibbonProps> = ({
    color = 'tapestry',
    children,
    ...props
}) => {
    return (
        <div data-testid="Ribbon" className={classNames(styles.Ribbon, styles[`Ribbon--${color}`])}>
            {children}
        </div>
    )
}

export default Ribbon
