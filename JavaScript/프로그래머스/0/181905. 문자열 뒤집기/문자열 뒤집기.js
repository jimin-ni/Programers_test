function solution(my_string, s, e) {
    const arr =[...my_string];
    
    while(s < e){
        [arr[s], arr[e]] = [arr[e], arr[s]];
        s++;
        e--;
    }
    return arr.join('');
}