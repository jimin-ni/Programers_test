function solution(balls, share) {
    var answer = 0;
    
    if(balls === share){
        answer = 1
    } else {
        let a = 1
        for(let i = 0; i < share; i++){
            a *= (balls - i)
        }
    
        let b = 1
        for(let i = 1; i <= share; i++){
            b *= i
        }
    
        answer = (a) / (b)
    }
    
    return Math.round(answer);
}