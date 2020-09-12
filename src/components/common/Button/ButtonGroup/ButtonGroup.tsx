import React from 'react'
import classNames from 'classnames'

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
    <div className={classNames({
        'ButtonGroup': true,
        'ButtonGroup--stacked': stacked,
        className
    })}>
        {children}
    </div>
)

export default ButtonGroup;
