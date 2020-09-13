import React from 'react'
import classNames from 'classnames'

import styles from './Button.module.scss'
import ColorType from '../../../../types/color';

export interface ButtonProps {
    disabled?: boolean
    className?: string
    onClick?: MouseEvent
    color?: ColorType['color'],
    children: React.ReactNode | string
}

const unimplementedClick = () => {
    throw new Error('No onClick event is attached to this button')
}

const Button: React.FC<ButtonProps> = ({
    color = 'tapestry',
    className,
    children,
    disabled,
    onClick,
}) => (
    <button
        disabled={disabled}
        onClick={typeof onClick === 'function' ? onClick : unimplementedClick}
        className={classNames(styles.Button, styles[`Button--${color}`], {
            [styles['Button--hover']]: className === 'hover',
            [styles['Button--click']]: className === 'click',
            [styles['Button--disabled']]: disabled,
        })}
    >
        {children}
    </button>
)

export default Button
