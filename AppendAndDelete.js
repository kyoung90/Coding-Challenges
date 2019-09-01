//Very interesting problem that is mostly logical without complex data structures
//Original problem here https://www.hackerrank.com/challenges/append-and-delete/problem

// Given two strings, s and t, and an integer k, find out if you can convert s into t using EXACTLY k operations.
//You can only do 2 operations: 
//1. Append a character at the end of a string
//2. Delete a character at the end of a string (deleting the last character of an empty string will return the same empty string)

//Examples:
// appendAndDelete("ashley", "ash", 2) //no
// appendAndDelete("aba", "aba", 7) //yes
// appendAndDelete("hackerhappy", "hackerrank", 9) //yes

function appendAndDelete(s, t, k) {
    if (s.length + t.length <= k) {
        return "Yes"
    }

    let sameLetters = 0

    for (let i = 0; i < s.length && i < t.length; i++){
        if (s[i] == t[i]) {
            sameLetters++
        }
        else {
            break
        }
    }

    let operationsRequired = s.length - sameLetters + t.length - sameLetters
    if (operationsRequired == k || (operationsRequired <  && (operationsRequired - k) % 2 == 0)) {
        return "Yes"
    }
    return "No"
}
