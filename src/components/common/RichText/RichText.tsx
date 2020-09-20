
import React, {ReactNode} from 'react';
import classNames from 'classnames';

import styles from './RichText.module.scss';

export interface RichTextProps {
    html?: string
    children?: string
    className?: string
}


const RichText: React.FC<RichTextProps> = ({html, children, className}) => (html || children) ? (
    <div
        className={classNames(styles.RichText, className)}
        dangerouslySetInnerHTML={{
            __html: html || children,
        }}
    />
) : null;

export default RichText;
