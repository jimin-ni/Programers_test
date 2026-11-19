function solution(n) {
    var arr = [];
    for(let i = 2; i <= n; i++){
        while (n % i ===0){
            arr.push(i)
            n = n/i
        }
    }
    
    let answer = [...new Set(arr)]
    return answer;
}