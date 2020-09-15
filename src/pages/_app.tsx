import Navigation from 'components/Navigation/Navigation';

import 'styles/globals.scss'

function MyApp({Component, pageProps}) {
    return (
        <>
            {/* <Navigation {...pageProps?.navigation} /> */}
            <Component {...(pageProps?.component || pageProps)} />
        </>
    )
}

export default MyApp
