function solution(arr, queries) {
    let answArr = []
    for(let i = 0; i <queries.length; i++){
        let s = queries[i][0]
        let e = queries[i][1]
        let k = queries[i][2]
        let minNum = Infinity

        //s ≤ i ≤ e 이여야 한다
        for(let m = s; m <= e; m++){ 
            if(k < arr[m]){
                let num = arr[m]
                minNum = Math.min(minNum, num)
            }
            
        } answArr.push(minNum === Infinity ? -1 : minNum)
    }
    return answArr
}