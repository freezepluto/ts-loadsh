import eq from '../eq';

test('test eq', () => {
    expect(eq(1, 2)).toBeFalsy()
    expect(eq(1, 1)).toBeTruthy()
})
