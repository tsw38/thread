import React from 'react'
import classNames from 'classnames'

import styles from './Button.module.scss'
import ColorType from '../../../../types/color'

export interface ButtonProps {
    inLabel?: boolean
    disabled?: boolean
    className?: string
    color?: ColorType['color']
    type?: 'button' | 'submit' | 'reset'
    onClick?: MouseEvent | (() => void)
    children: React.ReactNode | string
}

const unimplementedClick = () => {
    throw new Error('No onClick event is attached to this button')
}

const Button: React.FC<ButtonProps> = ({
    inLabel,
    color = 'tapestry',
    className,
    children,
    disabled,
    onClick,
    type = 'button',
}) => (
    <button
        type={type}
        disabled={disabled}
        {...(type === 'button' && !inLabel ? {
            onClick: typeof onClick === 'function' ? onClick : unimplementedClick
        } : {})}
        className={classNames(styles.Button, styles[`Button--${color}`], {
            [styles['Button--hover']]: className === 'hover',
            [styles['Button--click']]: className === 'click',
            [styles['Button--disabled']]: disabled,
            [className]: !['hover', 'click'].includes(className),
        })}
    >
        {children}
    </button>
)

export default Button
