import classNames from 'classnames'
import React, {ReactNode} from 'react'

import ColorType from '../../../types/color'

import styles from './Footer.module.scss'

export interface FooterProps {
    children: ReactNode
    color?: ColorType['color']
}

const Footer: React.FC<FooterProps> = ({children, color = 'tapestry'}) => (
    <footer className={classNames(styles.Footer, styles[`Footer-${color}`])}>
        {children}
    </footer>
)

export default Footer
