function solution(letter) {
    var answer = '';

    var morse = { 
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z'
    }
    
    let arr = []
    arr = letter.split(' ')
    
    for(let i = 0; i < arr.length; i++){
        arr[i] = morse[arr[i]]
    }
    
    return arr.join('');
}