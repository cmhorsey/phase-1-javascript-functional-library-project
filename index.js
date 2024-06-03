//

const unmodifiedTestArr = [1, 2, 3, 4]
const unmodifiedTestObj = {one: 1, two: 2, three: 3, four: 4}
const testArr = [1, 2, 3, 4]

const myEach = function(collection, callback) {
    for(const item of Object.values(collection)) {
      callback(item)
    }
    return collection
}

// console.log(myEach(unmodifiedTestObj, alert))

const myMap = function (collection, callback) {
  let newCollection = []
  for(const item of Object.values(collection)) {
    newCollection.push(callback(item))
  }
  return newCollection
}

//COME BACK TO myReduce
// const myReduce = function(collection, callback, acc) {
//   let singleValue = 0

//   for (const item of Object.values(collection)) {
//     singleValue = callback(item)
//   }

//   return singleValue
// }

// const callback = (acc, val, collection) => (acc + (val * 3))

// console.log(myReduce(testArr, callback, 10))
const intArr = [-1, 4, 0, 1, 3, 2, 3, 4, 5, 6]

function findCBGenerator(target) {
  return (function(currEl) { return target === currEl })
}

const myFind = function(collection, predicate) {
  for( const item of Object.values(collection)) {
    if (predicate(item)) {
      return item
    }
  }
}

console.log(myFind(intArr, findCBGenerator(8)))
