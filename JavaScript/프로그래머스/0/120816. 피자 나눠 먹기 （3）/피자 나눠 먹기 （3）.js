function solution(slice, n) {
    // 2~ 10 
    // 피자 조각 수 slice와 먹는 사람 수 n
    // n명의 사람들이 최소 한 조각 이상 피자를 먹으려면? 
    let pizza = 0
    if(n % slice === 0 ){
        // 나누어 떨어진다 = 모두 다 한 조각 이상 피자를 먹었다. 
        pizza= Math.floor(n / slice)
    }else {
        pizza= Math.floor(n / slice) + 1
    }
    return pizza
}