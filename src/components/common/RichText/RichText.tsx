
import React from 'react';
import classNames from 'classnames';

import styles from './RichText.module.scss';

export interface RichTextProps {
    html: string
    className?: string
}

const RichText: React.FC<RichTextProps> = ({html, className}) => (
    <div
        className={classNames(styles.RichText, className)}
        dangerouslySetInnerHTML={{
            __html: html,
        }}
    />
)

export default RichText;
