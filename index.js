const myEach = function(collection, callback) {
    for(const item of Object.values(collection)) {
      callback(item)
    }
    return collection
}

const myMap = function (collection, callback) {
  let newCollection = []
  for(const item of Object.values(collection)) {
    newCollection.push(callback(item))
  }
  return newCollection
}

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

const myFind = function(collection, predicate) {
  for( const item of Object.values(collection)) {
    if (predicate(item)) {
      return item
    }
  }
}

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

const myFirst = function(array, n) {
  if (n === undefined) {
      return array[0]
  } else {
      return array.slice(0, n)
  }
}

const myLast = function(array, n) {
  if (n === undefined) {
      return  array[array.length - 1]
  } else {
      return array.slice(-n)
  }
}

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
