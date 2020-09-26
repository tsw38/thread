import httpProxyMiddleware from 'next-http-proxy-middleware'

const isProd = process.env.PROXY || process.env.NODE_ENV === 'production'

export default (req, res) => {
    switch (req.method) {
        case 'GET':
            const {
                query: {user, pattern, resource},
            } = req

            return httpProxyMiddleware(req, res, {
                changeOrigin: true,
                target: `${
                    isProd
                        ? 'https://api.thread.community'
                        : process.env.API_URL
                }/patterns/${user}/${pattern}/${resource}`,
                pathRewrite: {
                    '^/api.+': '',
                },
            })
        default:
            res.status(404).end()
    }
}
