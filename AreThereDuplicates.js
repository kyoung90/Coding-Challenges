//AreThereDuplicates
//accepts variable args
//returns true if there are duplicates in the arguments, false otherwise

//examples:
//areThereDuplicates(1, 2, 3, 4, 5) // false
//areThereDuplicates(a, a, a, b, c, d) // true
//arethereDuplicates(10, 22, 50, a) //false

function areThereDuplicates(...args) {
  let counter = {}
  
  for(let element of args){
      counter[element] = counter[element] ? counter[element] + 1 : 1
  }
  
  for(let key in counter){
    if(counter[key] > 1){
      return true  
    } 
  }
  
  return false
}
