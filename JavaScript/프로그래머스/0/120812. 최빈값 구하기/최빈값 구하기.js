function solution(array) {
    const counts = new Map();
    let maxCount = 0;
    
    for(const num of array) {
        const count = (counts.get(num) || 0) + 1;
        counts.set(num, count);
        if (count > maxCount) {
            maxCount = count;
        }
    }
    
    const modes =[];
    for(const [num, count] of counts){
        if(count === maxCount) {
            modes.push(num)
        }
    }
    
    return modes.length > 1 ? -1: modes[0]
}