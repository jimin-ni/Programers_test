function solution(numbers, k) {
    // 시작 인덱스 = 1번 사람
    let index = 0;
    
//  k=1 일때, k 번째로 공을 던진 사람은 0번 인덱스. 그러므로 k-1번까지 공을 던진다고 생각
    for(let i = 1; i < k; i++){
        index += 2; // 공 던지는 사람이 두 칸 이동
        
//      index가 배열의 길이를 초과하면, 다시 처음으로. index가 1번 배열의 전체 길이로 나눈 값으로 돌아감.
        if(index >= numbers.length){
            index %= numbers.length;
        }
    }
    return numbers[index]
}