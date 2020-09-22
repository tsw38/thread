const originalError = console.error

beforeAll(() => {
    console.error = jest.fn()
})

afterAll(() => {
    console.error = originalError
})
