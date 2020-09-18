import React from 'react';
import Link from '../../common/Link';
import classNames from 'classnames';

import styles from './Image.module.scss';

import {Logo} from '../../common/Icon'

export interface ImageCardProps {
    /**
     * The url to link to the pattern page
     */
    url: string,
    /**
     * The main image for the pattern
     */
    img: {
        src: string,
        alt?: string
    },
    /**
     * The title of the pattern
     */
    title: string,
    /**
     * The name of the author of the pattern
     */
    author: string,
    /**
     * Any additional classes to apply to the card
     */
    className?: string
}

const ImageCard: React.FC<ImageCardProps> = ({
    url,
    img,
    title,
    author,
    className
}) => {
    return (
        <Link href={url}>
            <a className={classNames(styles.ImageCard, className)}>
                <figure style={{backgroundImage: `url(${img.src})`}} className={styles.Figure}>
                    <img {...img} className={styles.Image} />
                    <figcaption className={styles.Figcaption}>
                        <Logo mono color="tapestry" className={styles.Logo} />
                        <h2 className={styles.Title}>{title}</h2>
                        <p className={styles.Designer}>
                            Designed by
                            <span className={styles.Name}>{author}</span>
                        </p>
                    </figcaption>
                </figure>
            </a>
        </Link>
    )
};

export default ImageCard;
