function solution(n) {
    var answer = 0;
    let a = Math.floor(n/7)
    let b =(n%7)
    if(b===0){
        answer = a 
    } else {
        answer = a +1
    }
    return answer;
}