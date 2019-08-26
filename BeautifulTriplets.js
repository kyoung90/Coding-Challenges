//BeautifulTriplets
//Original problem here https://www.hackerrank.com/challenges/beautiful-triplets/problem
//Given an increasing sequence of integers and the value of a variable d, the difference between the triplets, count the number 
//of beautiful triplets in the sequence.

//examples
//beautifulTriplets([1, 2, 4, 5, 7, 8, 10], 3) // 3
//beautifulTriplets([1, 6, 7, 7, 8, 10, 12, 13, 14, 19], 3) // 2
//beautifulTriplets([1, 2, 3, 4, 5], 10) // 0

//example 
function beautifulTriplets(d, arr) {
    let frequencyCounter = {}
    let beautifulTriplets = 0 

    for (let element of arr) {
        if (frequencyCounter[element - d] && frequencyCounter[element - d - d]) {
            beautifulTriplets += frequencyCounter[element - d] * frequencyCounter[element - d - d]
        }

        frequencyCounter[element] = frequencyCounter[element] ? frequencyCounter[element] + 1 : 1

    }

    return beautifulTriplets
}
