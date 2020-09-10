import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';

import './Image.scss';

import {Logo} from '../Icon'

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
            <a className={classNames('ImageCard', className)}>
                <figure style={{backgroundImage: `url(${img.src})`}}>
                    <img {...img} />
                    <figcaption>
                        <Logo mono color="tapestry" />
                        <hr />
                        <h2 className="Title">{title}</h2>
                        <hr />
                        <p className="Designer">
                            Designed by
                            <span>{author}</span>
                        </p>
                    </figcaption>
                </figure>
            </a>
        </Link>
    )
};

export default ImageCard;
