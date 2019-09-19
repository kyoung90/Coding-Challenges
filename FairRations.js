// Interesting problem that requires no data structures to solve. Would definitely recommend trying it before looking at the solution. 

// Original problem here https://www.hackerrank.com/challenges/fair-rations/problem

// Given an array of integers, determine the minimum amount of steps to make the whole array even. 
// To make a change, you must follow the rule:
// 1 - To change a number, you must change the number behind it or after it

// If you can't make the array even, return NO

function fairRations(B) {
    let loafs = 0

    for(let i = 0; i < B.length-1; i++){
        if(B[i] % 2 == 1){
            B[i] += 1;
            B[i+1] += 1;
            loafs += 2
            // if(B[i+1] % 2 == 1){
            //     B[i] += 1
            //     B[i+1] += 1
            //     loafs += 2
            // }else if(i + 2 < B.length && B[i+2] % 2 == 1 && B[i+1] % 2 == 0){
            //     B[i] += 1
            //     B[i+1] += 2
            //     B[i + 2] += 1
            //     loafs += 4
            // }else{
            //     return "NO"
            // }
        } 
    }

    return B[B.length-1] % 2 == 0 ? loafs : "NO"
}
