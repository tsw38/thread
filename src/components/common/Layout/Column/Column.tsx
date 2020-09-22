
import React, { ReactNode } from 'react';
import classNames from 'classnames';

import styles from './Column.module.scss';

export interface ColumnProps {
    className?: string
    children: ReactNode
}

const Column: React.FC<ColumnProps> = ({className, children, ...props}) => (
    <div data-testid="Column" className={classNames(styles.Column, className)}>{children}</div>
)

export default Column;
