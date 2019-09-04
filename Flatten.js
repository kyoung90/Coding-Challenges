//Create a function that takes in an array with nested arrays and returns one flat array

//SOLVED USING RECURSION

//examples:
// flatten([1, 2, 3, [4, 5]]) // [1, 2, 3, 4, 5]
// flatten([[1, 2, 3], [4, 5], [[[6]]]]) // [1, 2, 3, 4, 5, 6]

function flatten(array){

  let arr = []

  arr = helper(array)

  return arr 
}

function helper(array){
    if(array.length === 0){
        return []
    }
    
    let arr = []
  
  if(typeof(array[0]) === "number"){
      arr.push(array[0])
  }
  else if(typeof(array[0]) === "object"){
       arr =  arr.concat(flatten(array[0]))
  }
  
  return arr.concat(flatten(array.slice(1)))

}

console.log("solution", flatten([1,2,3, [4, 5]]))
