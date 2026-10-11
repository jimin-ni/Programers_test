function solution(my_string, letter) {
    let arr = my_string.split('');
    let filtered = arr.filter(value => value !== letter);
    return filtered.join('');
}