function solution(price) {
    var answer = price;
   if (price >= 500000 ){
        answer = price*0.80
    } else if (price >= 300000 && price <500000){
        answer = price*0.90
    }  
    else if(price >= 100000 && price <300000){
        answer = price*0.95
    }    
    return Math.floor(answer);
}