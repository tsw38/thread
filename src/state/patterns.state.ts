import {useReducer, useCallback} from 'react'

import ReducerProps from './reducer.d'

const GET_PATTERNS = 'GET_PATTERNS'
const GET_PATTERN = 'GET_PATTERN'

interface ReducerInterface extends ReducerProps {
    getPattern: Function
    getPatterns: Function
}

export const getInitialState = (patterns = {}) => ({...patterns})

const reducer = (state, {type, payload}): ReducerInterface => {
    console.log('this is the reducer', {state, type, payload})

    switch (type) {
        case `${GET_PATTERN}_SUCCESS`:
        case `${GET_PATTERNS}_SUCCESS`:
            return {
                ...state,
                ...payload.reduce((acc, pattern) => {
                    acc[pattern.id] = pattern

                    return acc
                }, {}),
            }
        case `${GET_PATTERN}_SUCCESS`:
        case `${GET_PATTERNS}_FAILURE`:
        case `${GET_PATTERNS}_PENDING`:
        case `${GET_PATTERNS}_FAILURE`:
        case `${GET_PATTERNS}_PENDING`:
        default:
            return state
    }
}

export default function usePatternState(initialState, API) {
    const [state, dispatch] = useReducer(reducer, initialState)
    const createAction = (type) =>
        useCallback((query) => {
            API.get({query, type, dispatch})
        }, [])

    return [
        state,
        {
            getPatterns: createAction(GET_PATTERNS),
            getPattern: createAction(GET_PATTERN)
        },
    ]
}
