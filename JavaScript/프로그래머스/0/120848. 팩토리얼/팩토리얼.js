function solution(n) {
    let all = 1;
    let answer = 0;
    for(let i = 1; i <= n; i++){
        all = all*i
        if(all  >  n){
            break;
        }
                   answer = i;

    }
    return answer;
}