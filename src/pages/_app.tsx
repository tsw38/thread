import React from 'react';
import Head from 'next/head';
import Link from 'components/common/Link/Link';
import Navigation, {Footer} from 'components/Navigation'

import 'styles/globals.scss'

import API from '../utils/api'

const axios = new API()

axios.create()

function MyApp({Component, pageProps}) {
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
            </Head>
            <Navigation {...pageProps?.navigation} API={axios} />
            <main>
                <Component
                    {...(pageProps?.component || pageProps)}
                    API={axios}
                />
            </main>
            <Footer>
                <p>&copy; {new Date().getFullYear()} thread.community </p>

                <Link href="/about">
                    <a className="FooterLink">About</a>
                </Link>
            </Footer>
        </>
    )
}

export default MyApp
