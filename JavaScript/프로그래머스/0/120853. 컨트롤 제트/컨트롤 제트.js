function solution(s) {
    let arr = s.split(' ')
    let num = 0
    for(let i = 0; i < arr.length; i++){
        if(arr[i] != "Z"){
            num += Number(arr[i])
        }else {
            num -= Number(arr[i-1])
        }
    }
    return num
}