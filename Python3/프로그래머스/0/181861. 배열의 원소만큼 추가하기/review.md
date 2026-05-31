# 문제 제목

## **📝문제 설명**

### **⚠제한사항**

### **입출력 예**

## **🧐CODE REVIEW**

### **😫나의 오답 풀이**

### **🧾나의 풀이**

```python
def solution(arr):
    X = []
    for i in arr:
        X.extend([i]*i)
    return X
```

#### **📝해설**

```
extend() 메소드는 괄호 내부의 항목을 앞의 항목에 이어서 붙인다.
```

### **다른 풀이**

 ```python
def solution(arr):  
    return [a for a in arr for _ in range(a)]
```

#### **📝해설**
리스트 컴프리헨션을 사용한 방법이다.  
이중 for문 구조를 한 줄로 압축했다. 이중 for문을 풀어 쓰면 아래와 같다

```python
def solution(arr):
    result = []
    for a i arr:
        for _ in range(a):
             result.append(a)
     return reult
```

### **🔖정리**

1. 배운점

## 📚참고 사이트

- **🔗문제 링크**<br/>
사이트 주소

- **[제목]**<br/>
사이트 주소
