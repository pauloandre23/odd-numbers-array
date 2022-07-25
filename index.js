//ideia is to use reduce to return odd number in array
const b = [1,1,1,1,1,2,2,2,2,4,4,3]
function oddNumberObject(map, currentInteger) {
  function isMissing(int) { return map[int] === undefined}

  //if is the first time of the element, then
  if (isMissing(currentInteger)) {
    map[currentInteger] = 0
  }

  ++map[currentInteger]
  return map


  
}
const isOddNumber = key => key % 2 !== 0
const finalObject = b.reduce(oddNumberObject, {})

console.log(+Object.keys(finalObject)
          .find(integer => isOddNumber(finalObject[integer]))
          )
