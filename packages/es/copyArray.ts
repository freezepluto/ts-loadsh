const copyArray = <T>(source:Array<T>,target:Array<T>):Array<T>=>{
  let index = -1
  const length = source.length
  while(++index<length){
    target[index] = source[index]
  }
  return target
} 
export default copyArray