function solution(nums) {
    let answer = 0
    
    // 내가 고를 수 있는 수; nums/2개
    let myNums = (nums.length)/2
    
    // 중복 포켓몬 제거
    let allDiffPockmon = new Set(nums);
    
    // 중복 제거한 총 포켓몬의 수
    let allPockmonNum = allDiffPockmon.size
        
    answer = Math.min(allPockmonNum, myNums)
    return answer
    
}