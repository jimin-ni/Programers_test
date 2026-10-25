function solution(rsp) {
    var answer = '';
    let arr = rsp.split('')
    
    let arrAnswer = Array(arr.length).fill(0)
    
    for(let i = 0; i < arr.length; i++){
        if(Number(arr[i]) === 2){
            arrAnswer[i] = 0
            continue;
        }
        else if (Number(arr[i]) === 0){
            arrAnswer[i] = 5
            continue;
        } else {
            arrAnswer[i] = 2
            continue;
        }
    }
    
    return arrAnswer.join('');
}