import arrayEach from "../arrayEach";


test('test arrayEach', () => {
  let fn = jest.fn()
  expect(arrayEach([1,2,3],fn)).toBeInstanceOf(Array)
})