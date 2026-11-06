function solution(clothes) {
    const map = new Map();
    
    for(const [name, type] of clothes){
        const count = (map.get(type) || 0) + 1;
        
        map.set(type, count)
    }
    
    let answer  =  1;
    
    //각각의 의상 종류를 서로 곱함(count 개수 만큼 입을 때 + 안 입을 때 1건)
    for(const [type, count] of map){
        answer *= (count +1)
    }
    
    // 아무것도 안 입은 한 가지 경우 제외 
    return answer-1
}