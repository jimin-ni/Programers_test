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

```js
```

### **🔖정리**

1. 배운점

## 📚참고 사이트

- **🔗문제 링크**<br/>
사이트 주소

- **[제목]**<br/>
사이트 주소
