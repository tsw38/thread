
import React from 'react';

import './Hero.scss';

export interface HeroProps {
    /**
     * The hero image for the pattern
     */
    img: {
        src: string
        alt?: string
    }
    /**
     * The title of the pattern
     */
    title: string
    /**
     * The name of the author of the pattern
     */
    author: string
}

const Hero: React.FC<HeroProps> = ({img, title, author}) => (
    <div className="Hero" style={{backgroundImage: `url(${img.src})`}}>
        <h1>
            <span className="Title">{title}</span>
            <span className="Designer">{author}</span>
        </h1>
    </div>
)

export default Hero;








