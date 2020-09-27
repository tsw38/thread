import React from 'react'
import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext,
} from 'next/document'

const isProduction = process.env.NODE_ENV === 'production';

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx)
        return {...initialProps}
    }

    render() {
        return (
            <Html>
                <Head>
                    <link rel="icon" href="/favicon.svg" />
                    <link rel="stylesheet" href="https://unpkg.com/carbon-components@10.20.0/css/carbon-components.min.css" />
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                    {isProduction && (
                        <>
                            <script
                                async
                                src="https://www.googletagmanager.com/gtag/js?id=G-W7FRMBJZCQ"
                            />
                            <script
                                dangerouslySetInnerHTML={{
                                    __html: `
                                    window.dataLayer = window.dataLayer || [];
                                    function gtag(){dataLayer.push(arguments);}
                                    gtag('js', new Date());

                                    gtag('config', 'G-W7FRMBJZCQ');
                                `,
                                }}
                            />
                        </>
                    )}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
