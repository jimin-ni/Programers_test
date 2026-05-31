# 문제 제목

## **📝문제 설명**

### **⚠제한사항**

### **입출력 예**

## **🧐CODE REVIEW**

### **😫나의 오답 풀이**

### **🧾나의 풀이**

```js
def solution(binomial):
    answer = eval(binomial)
    return answer
```

#### **📝해설**
아래의 메소드를 사용했다. 이는 문자열을 실제 연산식으로 바꿔 계산하는 python 내장함수이다.
```js
eval()
```
하지만, 이는 사용자가 입력한 위험한 코드도 그대로 실행해 보안상 취약하다

#### **😅개선점**

1. `eval()` 이는 사용자가 입력한 위험한 코드도 그대로 실행해 보안상 취약하다


### **다른 풀이**

```js
def solution(expression):
    tokens = expression.split()  
    
    # 첫 번째 숫자를 시작값으로 지정
    result = int(tokens[0])
    
    # 2칸씩 건너뛰며 연산자(1, 3, 5...)를 확인하고 그 다음 숫자와 계산
    for i in range(1, len(tokens), 2):
        operator = tokens[i]
        next_num = int(tokens[i+1])
        
        if operator == '+':
            result += next_num
        elif operator == '-':
            result -= next_num
        elif operator == '*':
            result *= next_num
            
    return result
```

#### **📝해설**
1. `split()` 메소드를 사용해서 주어진 문자열의 input값을 구분해서 tokens 배열에 넣는다
2. `i`는 연산자에 해당하는 값이다. 때문에 이를 `operator` 변수로 부른다.
3. `if`문으로 `operator`에 따라 다른 연산을 수행하는데, 문제에서 `+, -, *` 세 가지 뿐이라 했으므로 `if - elif` 문으로 구분한다.


### **🔖정리**

1. 배운점

## 📚참고 사이트

- **🔗문제 링크**<br/>
사이트 주소

- **[제목]**<br/>
사이트 주소
