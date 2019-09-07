//Original problem here https://www.hackerrank.com/challenges/acm-icpc-team/problem

//Problem description and test cases can be found on https://www.hackerrank.com/challenges/acm-icpc-team/problem

//Took me a while to figure out. Mostly because I was looking for a more optimum solution than big o (n^2). After thinking for a long time, 
//I decided to at least solve it and it ended up being a solution of big o (n^3). I looked at discussions and the solutions there 
//looked very similar to mine.

function acmTeam(topic) {

    let max = 0
    let amount = 0
    let current = 0
    for (let i = 0; i < topic.length; i++){
        for (let j = i+1; j < topic.length; j++){
            for (let k = 0; k < topic[0].length; k++){
                if (topic[i][k] == 1 || topic[j][k] == 1) {
                    current++
                }
            }
            if (current > max) {
                max = current
                amount = 1
            } else if (current == max) {
                amount++
            }
            current = 0
        }
    }

    return [max, amount]
}
