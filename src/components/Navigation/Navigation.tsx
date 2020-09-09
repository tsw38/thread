import React from 'react';
import Link from 'next/link'
import classNames from 'classnames';

import './Navigation.scss';
import Ribbon from './Ribbon';

export interface Navigation {
}

const Navigation: React.FC<Navigation> = ({
  ...props
}) => {
  return (
    <div className={classNames(
        'Navigation',
    )}>
        <Ribbon color="tapestry" />
        <Ribbon color="bizarre">
            <nav className="bar">
                <Link href="/">
                    <a className="Logo">thread</a>
                </Link>
            </nav>
        </Ribbon>
    </div>
  );
};

export default Navigation;
