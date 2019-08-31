//Original problem here https://www.hackerrank.com/challenges/repeated-string/problem
//s is a string that will be repeated infinite times
//n is an integer 
//Find the number of a's in the first n characters of the infinitely repeated string s

//example
//repeatedString("aba", 10) // 7
//repeatedString("a", 5) // 5

function repeatedString(s, n) {
    let counter = 0

    let num = n

    if (num > s.length){
        for (let ele of s) {
            if (ele === "a") {
                counter++
            }
        }
        let multiplier = Math.floor(num / s.length)
        counter *= multiplier
        num -= multiplier * s.length

    } 

    for (let i = 0; i < num; i++){
        if (s[i] === "a") {
            counter++
        }
    }

    return counter

}
