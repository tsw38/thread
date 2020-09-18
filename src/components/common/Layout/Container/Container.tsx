
import React, { ReactNode } from 'react';
import classNames from 'classnames';

import styles from './Container.module.scss';

export interface ContainerProps {
    columns?: number,
    children: ReactNode
    className?: string
}

const Container: React.FC<ContainerProps> = ({
    columns,
    children,
    className,
}) => <div className={classNames(styles.Container, styles[`Container--x${columns}`], className)}>{children}</div>;

export default Container;
