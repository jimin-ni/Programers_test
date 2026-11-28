function solution(answers) {
    // 아래 세트를 무한 반복하는 구조
    //          0  1  2  3  4  5  6  7  8  9
    var arrA = [1, 2, 3, 4, 5,]
    var arrB = [2, 1, 2, 3, 2, 4, 2, 5]
    var arrC = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    
    let answerA = 0
    let answerB = 0
    let answerC = 0
    
    for(let i = 0; i < answers.length; i++){
        // A번 수포자가 맞은 정답
        let numA = i % 5;
        if(answers[i] === arrA[numA]){
            answerA++
        }
        
        let numB = i % 8;
        if(answers[i] === arrB[numB]){
            answerB++
        }        
        
        let numC = i % 10;
        if(answers[i] === arrC[numC]){
            answerC++
        }
    }
    
    let maxAnswer = Math.max(answerA, answerB, answerC)
    let arrAnswer = [answerA, answerB, answerC]
    
    const hasExactlyTwo = arrAnswer.filter(item => item === maxAnswer).length === 2;
    
    if(maxAnswer === answerA && maxAnswer === answerB && maxAnswer === answerC){
        return [1,2,3]
    }else if(hasExactlyTwo){
        if(arrAnswer[0] != maxAnswer){
            return [2,3]
        }else if (arrAnswer[1] != maxAnswer){
            return[1,3]
        }else {
            return[1,2]
        }
    }else {
        return [arrAnswer.indexOf(maxAnswer)+1];
    }    
}