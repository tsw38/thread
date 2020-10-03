import axios from 'axios'
import {jsonToGraphQLQuery} from 'json-to-graphql-query'

const isProd = process.env.PROXY || process.env.NODE_ENV === 'production';

interface CreateProps {
    isServer?: boolean
    options?: object
    headers?: object
}

export default class API {
    instance: any
    isServer: boolean

    constructor() {
        this.instance = null
        this.isServer = null
    }

    create(args?: CreateProps) {
        const {isServer = false, options = {}, headers = {}} = {...args}

        this.isServer = isServer

        this.instance = axios.create({
            baseURL: isProd ? 'https://api.thread.community' : process.env.API_URL,
            timeout: 5000,
            headers: {
                'Content-Type': 'application/json',
                ...headers,
            },
            ...options,
        })
    }
    // https://www.npmjs.com/package/json-to-graphql-query
    toQuery = (query, isMutation = false) => {
        return jsonToGraphQLQuery({
            [isMutation ? 'mutation' : 'query']: query
        }, {pretty: false})
    }


    getOperationName = (query) => {
        if (Object.keys(query).length !== 1) {
            throw new Error(
                'There should only be one query in the object: {keyName: {}}'
            )
        }

        return Object.keys(query)[0]
    }

    massage = (query) => ({status, data}) => {
        if (status >= 400) {
            throw new Error('there was a server error')
        }

        const operationName = this.getOperationName(query)

        return (
            data.data?.[operationName]?.[operationName] ??
            data.data?.[operationName] ??
            data.data?.[operationName] ??
            data.data ??
            data
        )
    }

    // Even though graphql POSTS everything, make it clear that this is only getting information, not setting
    get(args) {
        const {
            query = {},
            onSuccess = (...args) => {},
            onError = (...args) => {},
            onComplete = (...args) => {},
            type,
            dispatch,
        } = args

        if (!this.isServer) {
            if (!type) {
                throw new Error('Please provide a type for the dispatcher')
            }

            if (typeof dispatch !== 'function') {
                throw new Error('Please provide this function with a dispatch')
            }
        }

        if (!this.instance) {
            throw new Error(
                'You must have forgotten to create an instance, you can do that by calling API.create()'
            )
        }

        if (!Object.keys(query).length) {
            throw new Error(
                'You must provide a query object with keys in this call'
            )
        }

        let payload
        let hasErrored = false

        if (!this.isServer) {
            dispatch({
                type: `${type}_PENDING`,
            })
        }

        // console.log(this.toQuery(query))

        return new Promise((resolve) => {
            this.instance
                .post(isProd ? '/' : '/api', {
                    query: this.toQuery(query),
                })
                .then(this.massage(query))
                .then((data) => {
                    onSuccess(data)
                    payload = data

                    return payload
                })
                .catch((data) => {
                    onError(data)
                    payload = data
                    hasErrored = true

                    return data
                })
                .finally(() => {
                    onComplete()

                    if (!this.isServer) {
                        dispatch({
                            type: `${type}_${
                                hasErrored ? 'FAILURE' : 'SUCCESS'
                            }`,
                            payload,
                        })

                        // console.log(payload);
                    }

                    // console.log('what is the payload', payload)

                    resolve(payload)
                    payload = null
                })
        })
    }

    post(args) {
        const {
            type,
            mutation = {},
            onError = (...args) => {},
            onSuccess = (...args) => {},
            onComplete = (...args) => {},
            dispatch,
        } = args

        if (!this.isServer) {
            if (!type) {
                throw new Error('Please provide a type for the dispatcher')
            }

            if (typeof dispatch !== 'function') {
                throw new Error('Please provide this function with a dispatch')
            }
        }

        if (!this.instance) {
            throw new Error(
                'You must have forgotten to create an instance, you can do that by calling API.create()'
            )
        }

        if (!Object.keys(mutation).length) {
            throw new Error(
                'You must provide a mutation object with keys in this call'
            )
        }

        let payload
        let hasErrored = false

        if (!this.isServer) {
            dispatch({
                type: `${type}_PENDING`,
            })
        }

        console.warn({
            mutation: this.toQuery(mutation, true),
        })

        // return new Promise((resolve) => {
        //     this.instance
        //         .post(isProd ? '/' : '/api', {
        //             mutation: this.toQuery(mutation, true),
        //         })
        //         .then(this.massage(mutation))
        //         .then((data) => {
        //             onSuccess(data)
        //             payload = data

        //             return payload
        //         })
        //         .catch((data) => {
        //             onError(data)
        //             payload = data
        //             hasErrored = true

        //             return data
        //         })
        //         .finally(() => {
        //             onComplete()

        //             if (!this.isServer) {
        //                 dispatch({
        //                     type: `${type}_${
        //                         hasErrored ? 'FAILURE' : 'SUCCESS'
        //                     }`,
        //                     payload,
        //                 })

        //                 // console.log(payload);
        //             }

        //             // console.log('what is the payload', payload)

        //             resolve(payload)
        //             payload = null
        //         })
        // })
    }
}
