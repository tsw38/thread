
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
    if (!images.length || !images.some(image => image.primary)) {
        return null;
    }

    const {primary, ...primaryImage} = images.find(image => image.primary);
    const nonPrimaryImages = images.filter(image => !image.primary).slice(0, 4);

    return (
        <div className={classNames(styles.ImageGallery, className)} data-testid="ImageGallery">
            <div
                className={styles.primaryImage}
                data-testid="ImageGallery-Primary"
                style={{backgroundImage: `url(${primaryImage.src})`}}
            />

            {nonPrimaryImages.map((image, index) => (
                <div
                    data-testid={`ImageGallery-${index}`}
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
