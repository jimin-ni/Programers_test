function solution(age) {
    let answer = ''
    var alphabet = ['a','b','c','d','e','f','g','h','i','j'];
    
    let letter = String(age).split("")
    for(let i = 0; i <letter.length; i++){
        let numA = Number(letter[i])
        answer += alphabet[numA]
    }
    return answer;
}