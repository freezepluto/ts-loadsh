import every from '../every';

test('test every', () => {
	expect(
		every([1, 2, 3], (item) => {
			return item > 0;
		})
	).toBeTruthy();
});
