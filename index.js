//

const unmodifiedTestArr = [1, 2, 3, 4]
const unmodifiedTestObj = {one: 1, two: 2, three: 3, four: 4}
// const testArr = [1, 2, 3, 4]
const testArr = unmodifiedTestArr.slice()


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

//
// const myReduce = function(collection, callback, acc) {
//   let singleValue = 0

//   for (const item of Object.values(collection)) {
//     singleValue = callback(item)
//   }

//   return singleValue
// }

// const callback = (acc, val, collection) => (acc + (val * 3))

// console.log(myReduce(testArr, callback, 10))


const callback = (acc, val, collection) => (acc + (val * 3))


const myReduce = function(collection, callback, acc) {
  let singleValue
  let startIndex

  if (acc === undefined) {
    const values = Object.values(collection)
    singleValue = values[0]
    startIndex = 1
  } else {
    singleValue = acc
    startIndex = 0
  }

  const values = Object.values(collection)
  for (let i = startIndex; i < values.length; i++) {
    singleValue = callback(singleValue, values[i], collection)
  }

  return singleValue
}

console.log(myReduce(testArr, callback))

//

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

// console.log(myFind(intArr, findCBGenerator(8)))


const myFilter = function(collection, predicate) {
  let newCollection = []
  for( const item of Object.values(collection)) {
    if (predicate(item)) {
       newCollection.push(item)
    }
  }  return newCollection
}

const mySize = function(collection) {
  let numOfItems = 0
  for(let i = 0; i < Object.values(collection).length; i++){
    numOfItems += 1
  }
  return numOfItems
}

// console.log(mySize(intArr))

// const myFirst = function(array, n = 1) {
//   return array.slice(0, n)
// }

function myFirst(array, n) {
  if (n === undefined) {
      return array[0]
  } else {
      return array.slice(0, n);
  }
}

// console.log(myFirst(testArr))
// console.log(myFirst(testArr, 3))


function myLast(array, n) {
  if (n === undefined) {
      return  array[array.length - 1]
  } else {
      return array.slice(-n)
  }
}

// console.log(myLast(testArr))
// console.log(myLast(testArr, 3))

const myKeys = function(object) {
  let keys = []
  for(const item in object) {
    keys.push(item)
  }
  return keys
}

const myValues = function(object) {
  let values = []
  for(const item in object) {
    values.push(object[item])
  }
  return values
}

// console.log(myValues(unmodifiedTestObj))
