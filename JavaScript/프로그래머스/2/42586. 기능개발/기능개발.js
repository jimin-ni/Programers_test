function solution(progresses, speeds) {
    let arr = []
    for(let i = 0; i < progresses.length; i++){
        let leftP = 100 - progresses[i];
        let leftDay =  0;
        if(leftP%speeds[i] != 0){
            leftDay = Math.floor(leftP/speeds[i]) + 1;
        } else{
            leftDay = Math.floor(leftP/speeds[i]);
        }
        arr.push(leftDay)
    }
    
    let answer = [];
    let deployDay = arr[0];
    let count = 1;
    for(let i = 1;i < arr.length; i++){
        if(arr[i] <= deployDay){
            // deployDay랑 같이 배포
            count++
        } else {
            answer.push(count);
            deployDay = arr[i];
            count = 1
        }
    }
    answer.push(count);   
    
    return answer;
}