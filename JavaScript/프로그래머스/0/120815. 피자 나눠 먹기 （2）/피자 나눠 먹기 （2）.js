function solution(n) {
    let pizza = 1;
    
    while((pizza*6)%n !== 0){
        // 6으로 나눠 떨어지지 않음 = 다른 개수로 피자를 먹음
        pizza++
    }
    return pizza
}