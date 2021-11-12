//浅拷贝
const clone = (target) => {
	if (typeof target === 'object' && target !== null) {
		const cloneBackup = Array.isArray(target) ? [] : {};
		for (let key in target) {
			if (target.hasOwnProperty(key)) {
				cloneBackup[key] = target[key];
			}
		}
		return cloneBackup;
	} else {
		return target;
	}
};
export default clone;
