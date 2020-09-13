import React from 'react'
import classNames from 'classnames'

import styles from './ButtonGroup.module.scss'
export interface ButtonGroupProps {
    stacked?: boolean
    className?: string
    children: React.ReactNode
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({
    stacked,
    className,
    children,
}) => (
        <div className={classNames(
            styles.ButtonGroup,
            {
                [styles['ButtonGroup--stacked']]: stacked,

            }, className)}>
            {children}
        </div>
    )

export default ButtonGroup;
