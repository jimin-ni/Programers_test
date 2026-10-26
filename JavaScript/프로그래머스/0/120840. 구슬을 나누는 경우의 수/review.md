# 문제
Math.floor 로 최종 result 값을 정리했을 때에는 1가지 사례가 실패로 전 문항 통과에 실패.<br>
Math.round 로 최종 result 값을 정리했을 때에는 성공. <br>

# 원인
자바스크립트의 일반적인 숫자 타입(Number)은 64비트 부동소수점 방식을 사용하여 숫자를 저장하기 때문이다.<br>

## Math.floor(x) (내림 / 버림)
소수점 아래를 무조건 버리고(내림하여) 더 작은 정수로 만듭니다.<br>
예시: Math.floor(3.9) $\rightarrow$ 3, Math.floor(3.1) $\rightarrow$ 3<br>
음수의 경우 더 작은(절대값이 큰) 방향으로 내려갑니다: <br>
Math.floor(-3.1) $\rightarrow$ -4<br>

## Math.round(x) (반올림)
소수점 첫째 자리를 기준으로 반올림하여 가장 가까운 정수를 반환합니다. <br>
(소수점 첫째 자리가 5 이상이면 올리고, 4 이하면 버림)<br>
예시: Math.round(3.5) $\rightarrow$ 4, Math.round(3.4) $\rightarrow$ 3  <br>

## 다른 방법?
### BigInt
자바스크립트의 BigInt를 사용하면 자바스크립트의 안전 정수 한계를 넘는 큰 숫자도 소수점 오차 없이 정확한 정수로 계산해 줍니다.  <br>
팩토리얼 계산 등에 가장 안전합니다. <br>
정수 뒤에 알파벳 n을 붙이거나, BigInt() 함수를 사용하면 됩니다.  <br>
단, 일반 Number와 직접 섞어서 연산할 수 없습니다.!<br>

```const bigNum = 9007199254740991n; ```  <br>
```console.log(bigNum + 1n); // 9007199254740992n```  <br> <br>

```const bigNum2 = BigInt(123456789);``` <br>
```console.log(bigNum2); // 123456789n``` <br> <br>
