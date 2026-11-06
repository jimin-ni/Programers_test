# 문제 제목

## **📝문제 설명**

### **⚠제한사항**

### **입출력 예**

## **🧐CODE REVIEW**

### **😫나의 오답 풀이**

### **🧾나의 풀이**

```js
function solution(phone_book) {
    let answer = true;
    let num1 = Number(phone_book[0].slice(0,2));
    let num2 = 0;
    for(let i = 1; i < phone_book.length; i++){
        num2 = phone_book[i];   
        num2 = Number(num2.slice(0,2));
        
        if(num1 === num2){
            answer =false; 
            break;
        }
    }
    
    return answer
}
```

#### **📝해설**

```js
```

#### **😅개선점**

1. 문제 속 접두어인 경우를 비교하는 것은 모든 번호와 번호 사이를 비교하는 것을 의미한다.
2. 배열 속 첫 번째와 다른 나머지를 비교하는 것이 아니다. 

### **다른 풀이**

```js
function solution(phone_book) {
    phone_book.sort();
    for(let i = 0; i < phone_book.length - 1; i++ ){
        if(phone_book[i+1].startsWith(phone_book[i])){
            return false
        }
    }
    return true
    
}
```

#### **📝해설**

1. `sort()` : 정렬을 먼저 한다. 그럼 필연적으로 접두사가 같은 것 끼리 정렬될 수 밖에 없다.
2. `    for(let i = 0; i < phone_book.length - 1; i++ ){
        if(phone_book[i+1].startsWith(phone_book[i])){
            return false
        }
    }` :  정렬한 배열의 앞뒤를 서로 비교함. i번째와 i+1번째를 비교하기 때문에 for문은  `phone_book.length - 1` 미만으로 비교함
3. `startsWith()` : 어떤 문자열이 특정 문자나 문자열로 시작하는지 확인하여 참(true) 또는 거짓(false)을 반환해 주는 기능입니다.

### **🔖정리**

1. 배운점:  `startsWith()` 

## 📚참고 사이트

- **🔗문제 링크**<br/>
사이트 주소

- **[제목]**<br/>
사이트 주소
