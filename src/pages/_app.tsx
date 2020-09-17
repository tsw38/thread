import Navigation from 'components/Navigation/Navigation'

import 'styles/globals.scss'

import API from '../utils/api'

const axios = new API()

axios.create()

function MyApp({Component, pageProps}) {
    return (
        <>
            <Navigation {...pageProps?.navigation} API={axios} />
            <main>
                <Component
                    {...(pageProps?.component || pageProps)}
                    API={axios}
                />
            </main>
        </>
    )
}

export default MyApp
