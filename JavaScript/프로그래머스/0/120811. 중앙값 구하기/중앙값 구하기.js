function solution(array) {
    array.sort((a,b)=>a-b);
    
    let a = Math.floor((array.length)/2)
    
    return array[a];
}