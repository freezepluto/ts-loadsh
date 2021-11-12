import clone from '../clone';

test('test clone', () => {
	let o = { a: 1 };
	expect(clone(o)).toMatchObject({ a: 1 });
});
