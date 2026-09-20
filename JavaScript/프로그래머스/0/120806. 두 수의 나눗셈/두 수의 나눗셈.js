function solution(num1, num2) {
    let a = num1 / num2
    a *= 1000
    var answer = Math.floor(a);
    return answer;
}