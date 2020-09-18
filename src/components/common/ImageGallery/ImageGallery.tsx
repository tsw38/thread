
import React from 'react';
import classNames from 'classnames';

import styles from './ImageGallery.module.scss';

export interface ImageProps {
    src: string
    alt: string
    primary?: boolean
}

export interface ImageGalleryProps {
    images: Array<ImageProps>
    className?: string
}

const ImageGallery: React.FC<ImageGalleryProps> = ({images, className}) => {
    if (!images.length) {
        return null;
    }

    const {primary, ...primaryImage} = images.find(image => image.primary);
    const nonPrimaryImages = images.filter(image => !image.primary);

    return (
        <div className={classNames(styles.ImageGallery, className)}>
            <div
                className={styles.primaryImage}
                style={{backgroundImage: `url(${primaryImage.src})`}}
            />

            {nonPrimaryImages.map((image, index) => (
                <div
                    className={classNames(
                        styles.imageRowItem,
                        styles[`imageRowItem-${index + 1}`]
                    )}
                    key={`image-grid-item-${index}`}
                    style={{backgroundImage: `url(${image.src})`}}
                />
            ))}
        </div>
    )
}

export default ImageGallery;
