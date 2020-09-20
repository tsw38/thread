import httpProxyMiddleware from 'next-http-proxy-middleware'

export default (req, res) => {
    switch (req.method) {
        case 'GET':
            const {
                query: {user, pattern, resource},
            } = req

            return httpProxyMiddleware(req, res, {
                changeOrigin: true,
                target: `${process.env.API_URL}/patterns/${user}/${pattern}/${resource}`,
                pathRewrite: {
                    '^/api.+': '',
                },
            })
        default:
            res.status(404).end()
    }
}
