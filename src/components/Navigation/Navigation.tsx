import React from 'react'
import Link from '../common/Link'
import classNames from 'classnames'

import Ribbon from './Ribbon'
import {Logo} from '../common/Icon'
import ColorType from '../../types/color'

import styles from './Navigation.module.scss'

export interface NavigationProps {
    color?: ColorType['color']
}

const Navigation: React.FC<NavigationProps> = ({color = 'tapestry'}) => {
    return (
        <div className={styles.Navigation}>
            <Ribbon color={color} />
            <Ribbon color="bizarre">
                <nav className={styles.bar}>
                    <Link href="/">
                        <a className={styles.LogoAnchor}>
                            <Logo
                                mono
                                color={color}
                                className={styles.Logo}
                            />
                            <span className={styles.Text}>thread</span>
                        </a>
                    </Link>
                </nav>
            </Ribbon>
        </div>
    )
}

export default Navigation
