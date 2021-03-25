function arrayMap(arr, callback) {
  return arr.reduce((mapedArray, item) => {
    mapedArray.push(callback(item));
    return mapedArray;
  }, []);
}

function arrayFilter(arr, predicate) {
  return arr.reduce((filteredArray, item) => {
    predicate(item) && filteredArray.push(item);
    return filteredArray;
  }, []);
}


/**
 * A new array where every item of the original array has been applied the given callback on.
 * @override Array.map
 * @param {function} callback A function which receives every item, along with the index of that element and the original array, and it has to return a value which will be included in the resulting array at the same position of the original item.
 * @returns A new array
 */
Array.prototype.map = function(callback) {
  return this.reduce((mapedArray, item, index) => {
    mapedArray.push(callback(item, index, this));
    return mapedArray;
  }, []);
};


/**
 * A filtered version of the given array using the predicate to decide if the item meets the criteria to be included in the resulting array or not.
 * @override Array.filter
 * @param {function} predicate A function which receives every item of the array, along with the index of that element and the array itself, and it has to return true or false wether the given item will be part of the resulting array or not.
 * @returns A new array
 */
Array.prototype.filter = function(predicate) {
  return arr.reduce((filteredArray, item, index) => {
    predicate(item, index, this) && filteredArray.push(item);
    return filteredArray;
  }, []);
};

const arr = [1, 2, 3];
console.log('[independent function] map: x2', arr, arrayMap(arr, n => n * 2));
console.log('[overriden prototype function] map: x2', arr, arr.map(n => n * 2));
console.log('[independent function] filter: odd values', arr, arrayFilter(arr, n => n % 2 !== 0));
console.log('[overriden prototype function] filter: odd values', arr, arr.filter(n => n % 2 !== 0));
