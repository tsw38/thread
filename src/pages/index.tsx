import {NextSeo} from 'next-seo'
import classNames from 'classnames';
import React, {useEffect} from 'react';

import {Logo} from 'components/common/Icon';
import Grid from 'components/Masonry/Masonry';

import styles from 'styles/pages/Home.module.scss'

import API from '../utils/api'

const tagline = 'A place your needlecraft projects will call home'

import usePatternState, {getInitialState} from '../state/patterns.state'

const query = {
    patterns: {
        patterns: {
            url: true,
            title: true,
            author: true,
            images: {
                __args: {
                    primary: true,
                },
                src: true,
                alt: true,
            },
        },
    },
}

export default function Home({API, ...props}) {
    const [patterns, {getPatterns}] = usePatternState(getInitialState(props.patterns), API);
    const patternKeys = Object.keys(patterns);


    useEffect(() => {
        if (!patternKeys.length) {
            getPatterns(query)
        }
    }, [])

    return (
        <div
            className={classNames(styles.container, {
                [styles.loading]: !patternKeys.length,
            })}
        >
            <NextSeo
                title="Thread"
                description={tagline}
                canonical="https://thread.community"
            />
            {patternKeys.length ? (
                <Grid
                    elements={patternKeys.map((id) => ({
                        ...patterns[id],
                        img: patterns[id].images[0],
                    }))}
                />
            ) : (
                <Logo loading className={styles.loadingLogo} />
            )}
        </div>
    )
}

export const getServerSideProps = async (...args) => {
    const axios = new API()

    axios.create({isServer: true})

    const patterns = await axios.get({query})

    return {
        props: {
            patterns,
            navigation: {
                color: 'tapestry',
            },
        },
    }
}
