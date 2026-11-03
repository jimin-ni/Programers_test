function solution(box, n) {
    var answer = 0;
    let x = box[0];
    let y = box[1];
    let z = box[2];
    
    let xNum = Math.floor(x / n)
    let yNum = Math.floor(y / n)
    let zNum = Math.floor(z / n)
    
    answer = (xNum * yNum) * zNum
    return answer;
}