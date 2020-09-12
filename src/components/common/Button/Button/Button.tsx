import React from 'react'
import classNames from 'classnames'

import './Button.scss'

export interface ButtonProps {
    color?:
        | 'bianca'
        | 'bizarre'
        | 'atomic_tangerine'
        | 'tickle_me_pink'
        | 'tapestry'
        | 'flush'
        | 'flamingo'
        | 'corduroy'
        | 'tuna'
    disabled?: boolean
    className?: string
    onClick?: MouseEvent
    children: React.ReactNode | string
}

const unimplementedClick = () => {
    console.warn('No On Click Event')
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
        className={classNames({
            Button: true,
            [`Button--${color}`]: true,
            'Button--hover': className === 'hover',
            'Button--click': className === 'click',
            'Button--disabled': disabled,
        })}
    >
        {children}
    </button>
)

export default Button
