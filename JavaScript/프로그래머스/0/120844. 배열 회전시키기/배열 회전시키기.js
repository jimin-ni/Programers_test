function solution(numbers, direction) {
    if(direction === 'right'){
        // 마지막 원소가 맨 앞으로
        const last = numbers.pop();
        numbers.unshift(last)
    } else {
        // 첫 번째 원소가 맨 뒤로
        const first = numbers.shift();
        numbers.push(first)
    }
    return numbers;
}