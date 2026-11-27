function solution(sizes) {
    // 0번과 1번을 크기순으로 정렬
    let sizesArr = [];
    for(let i = 0; i<sizes.length; i++){
        sizes[i].sort((a,b)=>a-b);
    }
    
    let maxWidth = 0;
    let maxHeight = 0;
    for(let i =0; i<sizes.length; i++){
        maxWidth = Math.max(maxWidth, sizes[i][0]);
        maxHeight = Math.max(maxHeight, sizes[i][1]);
    }
    return maxWidth*maxHeight
}