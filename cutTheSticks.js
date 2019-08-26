//For full explanation, look at the original problem.
//original problem here https://www.hackerrank.com/challenges/cut-the-sticks/problem
//You are given a number of sticks of varying lengths. 
//You will iteratively cut the sticks into smaller sticks, discarding the shortest pieces until there are none left. 
//At each iteration you will determine the length of the shortest stick remaining, cut that length from each of the 
//longer sticks and then discard all the pieces of that shortest length. When all the remaining sticks are the same length, 
///they cannot be shortened so discard them.

//print the number of sticks that are left before each iteration until there are none left.
//examples

//cutTheSticks([8, 8, 14, 10, 3, 5, 14, 12]) // [8, 7, 6, 4, 3, 2]
//cutTheSticks([1, 2, 3, 4]) // [4, 3, 2, 1]
//cutTheSticks([[1, 1, 3, 3, 5, 10]) // [6, 4, 2, 1]

function cutTheSticks(arr) {
    // big O(n ^ 2) approach
    
    // let lowest = Infinity
    // let amountCut = 0
    // let amountOfSticksCut = []
    // let array = [...arr]

    // while (array.length > 0) {

    //     for (let element of array) {
    //         if (element != 0) {
    //             if (element < lowest) {
    //                 lowest = element
    //             }
    //         }
    //     }

    //     for (let i = array.length - 1; i >= 0; i--) {
    //         if (array[i] == lowest) {
    //             array.splice(i, 1)
    //         } else {
    //             array[i] -= lowest
    //         }
    //         amountCut++
    //     }

    //     amountOfSticksCut.push(amountCut)
    //     amountCut = 0
    //     lowest = Infinity
    // }
    
    // return amountOfSticksCut
    
    // big O (n log n) approach

    let amountOfSticksCut = []
    //sort array (time complexity of n log n) 
    let array = [...arr].sort(function (a, b) { return a - b })

    while (array.length > 0) {
        amountOfSticksCut.push(array.length)
        while (array.length >= 2 && array[0] == array[1]) {
            array.splice(0, 1)
        }
        array.splice(0, 1)
    }

    return amountOfSticksCut
}
