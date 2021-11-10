function isFunction(params: Function): boolean {
    //verify
    return typeof params === 'function'
}

function filter<T>(array: Array<T>, handle: Function) {
    if (Array.isArray(array) && isFunction(handle)) {
        let index = -1
        let resIndex = 0
        //判断 array传入的是否是数组，并且获取长度
        //verify the first parameter array is an Array ,and computed the length of array
        const length = array.length
        const result = []
        //第一次调用时 ++index  index -1 => 0  
        while (++index < length) {
            const value = array[index]
            if (handle(array[index], index, array)) {
                // every time used 
                //每次使用完+1 第一次是0 然后 ++ 第二次继续使用的时候 就是 1
                result[resIndex++] = value
            }
        }
        return result
    } else {
        return console.warn('The first parameter must be an Array or the second parameter must be a Function')
    }
}
export default filter