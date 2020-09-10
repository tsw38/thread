import React from 'react';
import Link from '../common/Link';
import classNames from 'classnames';

import './Navigation.scss';
import Ribbon, {RibbonProps} from './Ribbon';
import {Logo} from '../Icon';

export interface Navigation {
    color?: RibbonProps["color"]
}

const Navigation: React.FC<Navigation> = ({
    color = 'tapestry',
    ...props
}) => {
	return (
        <div className={classNames('Navigation')}>
            <Ribbon color={color} />
            <Ribbon color="bizarre">
                <nav className="bar">
                    <Link href="/">
                        <a className="LogoAnchor">
                            <Logo />
                            <span>thread</span>
                        </a>
                    </Link>
                </nav>
            </Ribbon>
        </div>
    );
};

export default Navigation;
