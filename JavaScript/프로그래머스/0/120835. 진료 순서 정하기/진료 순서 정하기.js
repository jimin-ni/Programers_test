function solution(emergency) {
    var answer = Array(emergency.length).fill(0);
    let newEmergency = [...emergency]
    
    newEmergency.sort((a,b) => b - a)

    for(let i = 0; i < emergency.length; i++){
        for(let k = 0; k < newEmergency.length; k++){
            if(emergency[i] === newEmergency[k]){
                answer[i] = k +1
            }
        }
    }
    return answer;
}