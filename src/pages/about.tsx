import React from 'react'
import {NextSeo} from 'next-seo'

import {Logo} from 'components/common/Icon'

import styles from 'styles/pages/About.module.scss'

import {Container, Column} from 'components/common/Layout'

const tagline = 'A place your needlecraft projects will call home'

export default function About({API, ...props}) {

    return (
        <Container className={styles.center}>
            <NextSeo
                title="Thread | About"
                description={tagline}
                canonical="https://thread.community"
            />
            <Logo color="tapestry" mono />
            <div className={styles.content}>
                <h1 className={styles.Header}>About</h1>
                <p>Hi, my name's Tyler Williams.</p>
                <p>
                    I'm in the process of building out this site because I've
                    never found a fiberarts website that had all of the features
                    I wanted.
                </p>
                <p>
                    Either their information architecture was lacking, causing a
                    lot of excessive navigation on my part, or I didnt like the
                    feel of the site.
                </p>
                <p>
                    It's my hope that I can build something I'm truely proud of,
                    if you have any suggestions and things you want to see
                    please let me know. My email is{' '}
                    <strong>tyler.scott.14@gmail.com</strong>
                </p>
                <p>The last thing I want to ask is patience.</p>
            </div>
        </Container>
    )
}
