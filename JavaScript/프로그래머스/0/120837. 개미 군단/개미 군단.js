function solution(hp) {
    let master = 0
    let subMaster = 0
    let man = 0
    var left = 0;
    
    master = Math.floor(hp / 5)
    left = hp - master*5
    
    subMaster = Math.floor(left / 3)
    left = left - subMaster*3
    
    man = left
    
    let answer = master + subMaster + man
    
    return answer;
}