import copyArray from "../copyArray";

test('test copyArray',()=>{
  let arr = []
  let result = [1,2,3]
  expect(copyArray([1,2,3],arr)).toEqual(expect.arrayContaining(result));
})