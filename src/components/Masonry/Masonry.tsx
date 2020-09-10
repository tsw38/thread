import classNames from 'classnames';
import React, {useState} from 'react'
import Gallery from 'react-masonry-component';
import ImageCard, {ImageCardProps} from '../Card/Image';

import './Masonry.scss';

export interface MasonryProps {
    elements?: ImageCardProps[]
}

const masonryOptions = {
    transitionDuration: 250,
}

const Masonry: React.FC<MasonryProps> = ({
    elements
}) => {
    const [layoutComplete, setLayoutComplete] = useState(false);

    const childElements = elements.map((element, index) => {
        return (
            <ImageCard className="MasonryItem" key={`masonry-item-${index}`} {...element} />
        )
    })

    const handleLayoutComplete = () => {
        setLayoutComplete(true);
    }

    return (
        <Gallery
            className={classNames('Masonry', {'Masonry-hidden': !layoutComplete})}
            elementType="div"
            options={masonryOptions}
            updateOnEachImageLoad={true}
            onLayoutComplete={handleLayoutComplete}
        >
            {childElements}
        </Gallery>
    )
}

export default Masonry;
