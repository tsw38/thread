
import React from 'react';

import styles from './Hero.module.scss';

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

const Hero: React.FC<HeroProps> = ({img, title, author}) => (img?.src && author && title) ? (
    <div data-testid="Hero" className={styles.Hero} style={{backgroundImage: `url(${img.src})`}}>
        <h1 className={styles.TextWrapper}>
            <span className={styles.Title}>{title}</span>
            <span className={styles.Designer}>{author}</span>
        </h1>
    </div>
) : null;

export default Hero;








