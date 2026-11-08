function solution(genres, plays) {
    const genreTotalMap = new Map(); // 장르별 총 재생 횟수
    const genreSongsMap = new Map(); // 장르별 노래 정보 ([고유번호, 재생횟수])
    
    // 1. 데이터 분류 및 누적
    for(let i = 0; i < genres.length; i++){
        const genre = genres[i];
        const play = plays[i];
        
        // 장르별 총 재생 횟수 누적
        genreTotalMap.set(genre, (genreTotalMap.get(genre) || 0) + play);
        
        // 장르별 노래 목록 저장 (genreSongsMap에 저장해야 함!)
        if(!genreSongsMap.has(genre)) {
            genreSongsMap.set(genre, []);
        }
        genreSongsMap.get(genre).push([i, play]);
    }
    
    // 2. 총 재생 횟수가 많은 장르 순으로 정렬
    const sortedGenres = [...genreTotalMap.keys()].sort((a, b) => {
        return genreTotalMap.get(b) - genreTotalMap.get(a);
    });
    
    const answer = [];
    
    // 3. 장르별 노래 정렬 후 최대 2곡씩 추출
    for(const genre of sortedGenres) {
        const songs = genreSongsMap.get(genre); // 변수명 일치시키기 (songs)
        
        // 재생 횟수가 같으면 고유 번호 오름차순(a - b), 다르면 재생 횟수 내림차순(b - a)
        songs.sort((a, b) => {
            if(a[1] === b[1]){
                return a[0] - b[0];
            }
            return b[1] - a[1];
        });
        
        // 상위 최대 2곡의 고유번호만 뽑아 answer 배열에 넣기
        for(let i = 0; i < Math.min(songs.length, 2); i++){
            answer.push(songs[i][0]);
        }
    }
    
    return answer;
}