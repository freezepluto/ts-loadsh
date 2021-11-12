const every = <T>(array: Array<T>, handle) => {
	let index = -1;
	let length = array.length || 0;
	while (++index < length) {
		if (!handle(array[index], index, array)) {
			return false;
		}
	}
	return true;
};
export default every;
