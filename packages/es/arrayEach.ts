const arrayEach = <T>(array:Array<T>,handle) =>{
  let index = -1
  const length = array.length
  while(++index < length){
    if(handle(array[index],index,array)===false) break
  }
  return array
}
export default arrayEach