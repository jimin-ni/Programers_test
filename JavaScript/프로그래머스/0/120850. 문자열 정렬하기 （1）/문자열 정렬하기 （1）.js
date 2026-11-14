function solution(my_string) {
    my_string = my_string.match(/\d/g);
    my_string = my_string.map(Number);
    
    my_string.sort((a,b) => a - b)
    return my_string;
}