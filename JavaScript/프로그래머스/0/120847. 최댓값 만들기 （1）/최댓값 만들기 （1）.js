function solution(numbers) {
    let k = numbers.length;
    var answer = 0;

    for(let i = 0; i < k; i++){
        numbers = numbers.sort((a,b) => a - b)
    }

    answer = numbers[k-1] * numbers[k-2]
    return answer;
}