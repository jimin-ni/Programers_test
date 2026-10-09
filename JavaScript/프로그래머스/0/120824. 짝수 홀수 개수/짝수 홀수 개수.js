function solution(num_list) {
    const evens = num_list.filter(x => x % 2 === 0);
    const odds = num_list.filter(x => x % 2 !== 0);
    var answer = [evens.length, odds.length];
    return answer;
}