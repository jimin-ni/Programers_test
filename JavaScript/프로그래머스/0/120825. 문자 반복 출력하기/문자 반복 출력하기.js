function solution(my_string, n) {
    let arr = [];
    arr = my_string.split('');
    
    let answer = []
    for(let i = 0; i<arr.length; i++){
        answer[i] = arr[i].repeat(n)    
    }
    
    return answer.join('');
}