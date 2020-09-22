import '@testing-library/jest-dom'
// NOTE: jest-dom adds handy assertions to Jest and is recommended, but not required

const originalError = console.error

beforeAll(() => {
    console.error = jest.fn()
})

afterAll(() => {
    console.error = originalError
})
