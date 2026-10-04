function solution(numbers) {
    let sumNum = 0
    for(let i = 0; i < numbers.length; i++){
        sumNum += numbers[i]
    }
    let num = sumNum/(numbers.length)
    let answer = num.toFixed(1)
    return answer
}