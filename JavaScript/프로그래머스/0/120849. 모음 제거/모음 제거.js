function solution(my_string) {
//     (정규식, 바꿀 문자)
//     대활호 안의 어느 하나라도 일치하는지 판단, g는 전역검색
    return my_string.replace(/[aeiou]/g, '');
}