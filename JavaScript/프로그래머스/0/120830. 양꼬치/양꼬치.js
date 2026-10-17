function solution(n, k) {
    var answer = 12000*n
    if(n<10){
         answer = answer + 2000*k;
         return answer;
    } else {
        let per = k - Math.floor(n/10);
        if(per <= 0){
            return answer;
        } else {
             answer = answer + (2000*per);
        }
    }
   return answer;
}