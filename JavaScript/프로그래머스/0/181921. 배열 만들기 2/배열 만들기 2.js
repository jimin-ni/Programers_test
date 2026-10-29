function solution(l, r) {
    var answer = [];
    const regex = /^[05]+$/;
    for(let i = l; i <= r; i++){
        let stringNum = String(i);
        
        if(regex.test(stringNum)){
            answer.push(Number(stringNum))
        }
    }
    return answer.length === 0 ? [-1] : answer;
}