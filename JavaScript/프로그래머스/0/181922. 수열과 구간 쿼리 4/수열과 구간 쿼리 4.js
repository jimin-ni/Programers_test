function solution(arr, queries) {
        
    for(let j = 0; j < queries.length; j++){
        let s = queries[j][0]
        let e = queries[j][1]
        let k = queries[j][2]
    
        for(let i = s; i <=e; i++){
            if(i % k === 0){
                // i가 k의 배수
                arr[i]++
            }
        }
    }
    
    return arr;
}