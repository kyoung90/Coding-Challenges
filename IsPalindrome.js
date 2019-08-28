//A simple recursive Javascript solution to check if a string is a palindrome

//Palindrome means that the string spelled backwards is still the same
//isPalidrome(tacocat) // true
//isPalindrome(racecar) // true
//isPalindrome(pizza) // false

function isPalindrome(str){
  // add whatever parameters you deem necessary - good luck!
  if (str.length <= 1){
      return true
  }
  
  return str[0] === str[str.length-1] && isPalindrome(str.slice(1, str.length-1))
}
