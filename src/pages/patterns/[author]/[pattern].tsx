import React, {useEffect} from 'react'
import {NextSeo} from 'next-seo'
import {useRouter} from 'next/router'

import Hero from 'components/Hero/Hero'
import {Flag} from 'components/common/Icon'
import Button from 'components/common/Button'
import RichText from 'components/common/RichText/RichText'
import {Container, Column} from 'components/common/Layout'
import ImageGallery from 'components/common/ImageGallery/ImageGallery'

import styles from 'styles/pages/Pattern.module.scss'

import API from 'utils/api'
import {unixToMonthYear} from 'utils/Date';

const query = ({title, author}) => ({
    pattern: {
        __args: {
            title,
            author,
        },
        title: true,
        author: true,
        cost: true,
        craft: true,
        yardage: true,
        category: true,
        hookSize: true,
        needleSize: true,
        yarnWeight: true,
        description: true,
        publication: true,
        difficulty: true,
        downloadUrl: true,
        suggestedYarn: true,
        notes: true,
        publicationDate: true,
        languages: true,
        originalSource: {
            url: true,
            name: true,
        },
        images: {
            src: true,
            alt: true,
            primary: true,
        },
    },
})

export default function UserPattern({API, patternData, ...props}) {
    const router = useRouter()
    const {author, pattern} = router.query

    useEffect(() => {
        if (!Object.keys(patternData).length){
            router.back();
        }
    })

    const downloadPattern = () => {
        // TODO: downloading, may not always want to open pdf
        window.open(patternData.downloadUrl)
    }

    return (
        <div>
            {Object.keys(patternData).length > 1 ? (
                <>
                    <NextSeo
                        title={`Thread | ${patternData.title}`}
                        description={patternData.description}
                        canonical={`https://thread.community/patterns/${author}/${pattern}`}
                    />
                    <Hero
                        author={patternData.author}
                        img={patternData?.images?.find((image) => image.primary)}
                        title={patternData.title}
                    />
                    <Container columns={2}>
                        <Column>
                            <ImageGallery images={patternData.images} />

                            {patternData.notes && (
                                <>
                                    <h3 className={styles.notes}>Notes:</h3>
                                    <RichText>{patternData.notes}</RichText>
                                </>
                            )}
                            <div className={styles.originalSource}>
                                <h3 className={styles.sourceHeading}>
                                    Original Source:
                                </h3>{' '}
                                <a
                                    target="_blank"
                                    href={patternData.originalSource?.url}
                                    className={styles.originalSource}
                                >
                                    {patternData?.originalSource?.name}
                                </a>
                            </div>
                        </Column>
                        <Column className={styles.details}>
                            <p className={styles.cost}>
                                {!patternData.cost ? 'Free' : patternData.cost}
                            </p>
                            {patternData.description && (
                                <p className={styles.description}>
                                    <span className={styles.header}>
                                        Pattern Description:
                                    </span>{' '}
                                    {patternData.description}
                                </p>
                            )}
                            <Button
                                onClick={downloadPattern}
                                className={styles.download}
                            >
                                Download
                            </Button>
                            <div className={styles.langAndDifficulty}>
                                <div className={styles.gridCell}>
                                    <h6 className={styles.boldHeader}>
                                        Languages
                                    </h6>
                                    <div className={styles.gridRow}>
                                        {patternData?.languages?.map((flag) => (
                                            <Flag
                                                name={flag}
                                                key={flag}
                                                className={styles.flag}
                                            />
                                        ))}
                                    </div>
                                </div>
                                <div className={styles.gridCell}>
                                    <h6 className={styles.boldHeader}>
                                        Difficulty
                                    </h6>
                                    <p className={styles.gridRow}>
                                        {patternData.difficulty} of 5
                                    </p>
                                </div>
                            </div>

                            <ul className={styles.inDetail}>
                                <li className={styles.listItem}>
                                    <span className={styles.detailHeader}>
                                        Published in
                                    </span>
                                    <span className={styles.detailValue}>
                                        {patternData.publication}
                                    </span>
                                </li>
                                <li className={styles.listItem}>
                                    <span className={styles.detailHeader}>
                                        Craft
                                    </span>
                                    <span className={styles.detailValue}>
                                        {patternData.craft}
                                    </span>
                                </li>
                                <li className={styles.listItem}>
                                    <span className={styles.detailHeader}>
                                        Category
                                    </span>
                                    <span className={styles.detailValue}>
                                        {patternData.category}
                                    </span>
                                </li>
                                <li className={styles.listItem}>
                                    <span className={styles.detailHeader}>
                                        Published date
                                    </span>
                                    <span className={styles.detailValue}>
                                        {unixToMonthYear(patternData.publicationDate)}
                                    </span>
                                </li>
                                <li className={styles.listItem}>
                                    <span className={styles.detailHeader}>
                                        Suggested yarn
                                    </span>
                                    <span className={styles.detailValue}>
                                        {patternData.suggestedYarn}
                                    </span>
                                </li>
                                <li className={styles.listItem}>
                                    <span className={styles.detailHeader}>
                                        Yarn weight
                                    </span>
                                    <span className={styles.detailValue}>
                                        {patternData.yarnWeight}
                                    </span>
                                </li>

                                {patternData.needleSize && (
                                    <li className={styles.listItem}>
                                        <span className={styles.detailHeader}>
                                            Needle size
                                        </span>
                                        <span className={styles.detailValue}>
                                            {patternData.needleSize}
                                        </span>
                                    </li>
                                )}

                                {patternData.hookSize && (
                                    <li className={styles.listItem}>
                                        <span className={styles.detailHeader}>
                                            Hook size
                                        </span>
                                        <span className={styles.detailValue}>
                                            {patternData.hookSize}
                                        </span>
                                    </li>
                                )}

                                <li className={styles.listItem}>
                                    <span className={styles.detailHeader}>
                                        Yarnage
                                    </span>
                                    <span className={styles.detailValue}>
                                        {patternData.yardage}
                                    </span>
                                </li>
                            </ul>
                        </Column>
                    </Container>
                </>
            ) : null}
        </div>
    )
}

export const getServerSideProps = async ({query: {author, pattern}}) => {
    const axios = new API()

    axios.create({isServer: true})

    const patternData: {
        author?: string
        title?: string
    } = await axios.get({
        query: query({title: pattern, author}),
    })

    // console.warn("I'm not hopeful", pattern, author)

    return {
        props: {
            patternData: (patternData.author && patternData.title) ? patternData : {},
            navigation: {
                color: 'tapestry',
            },
        },
    }
}
