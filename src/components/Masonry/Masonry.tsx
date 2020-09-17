import classNames from 'classnames';
import React, {useState} from 'react'
import Gallery from 'react-masonry-component';
import ImageCard, {ImageCardProps} from '../Card/Image';

import styles from './Masonry.module.scss';

export interface MasonryProps {
    elements?: ImageCardProps[]
    columnWidth?: number
}

const Masonry: React.FC<MasonryProps> = ({
    elements,
    ...masonryOptions
}) => {
    const [layoutComplete, setLayoutComplete] = useState(false);

    const childElements = elements.map((element, index) => {
        return (
            <ImageCard className={styles.MasonryItem} key={`masonry-item-${index}`} {...element} />
        )
    })

    const handleLayoutComplete = () => {
        setLayoutComplete(true);
    }

    return (
        <Gallery
            className={classNames(styles.Masonry, {
                [styles['Masonry-hidden']]: !layoutComplete
            })}
            elementType="div"
            options={{
                transitionDuration: 250,
                ...masonryOptions
            }}
            updateOnEachImageLoad={true}
            onLayoutComplete={handleLayoutComplete}
        >
            {childElements}
        </Gallery>
    )
}

export default Masonry;
