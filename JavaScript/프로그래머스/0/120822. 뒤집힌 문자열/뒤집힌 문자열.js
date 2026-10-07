function solution(my_string) {
    let arr = my_string.split('');
    arr.reverse()
    let answer = arr.join('')
    return answer;
}