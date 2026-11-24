function solution(array, commands) {
    var answer = [];
    for(let i = 0; i < commands.length; i++){
        // commands i번째에 대해서
        let commandsI = commands[i][0];
        let commandsJ = commands[i][1];
        let commandsK = commands[i][2];
        let arrayNow = array;
        
        arrayNow = array.slice(commandsI-1, commandsJ);
        arrayNow = arrayNow.sort((a,b) => a-b)
        answer.push(arrayNow[commandsK-1])
    }
     return answer;
}