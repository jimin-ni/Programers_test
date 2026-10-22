function solution(n) {
    var arr = [];
    for(let i = 1; i <=n; i++){
        if(n%i===0){
            arr.push(i)
        }
    }
    let lng = arr.length
    
    return lng;
}