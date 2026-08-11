def solution(arr1, arr2):
    answer = 0

    # 두 배열의 길이가 다를 때
    if len(arr1) != len(arr2) :
        if len(arr1) > len(arr2) :
            answer  = 1
        elif len(arr1) < len(arr2) :
            answer = -1
    
    # 두 배열의 길이가 같을 때
    elif len(arr1) == len(arr2) :
        arrTotal1 = sum(arr1)
        arrTotal2 = sum(arr2)
        if arrTotal1 > arrTotal2 :
            answer  = 1
        elif arrTotal1 < arrTotal2 :
            answer = -1
        elif arrTotal1 == arrTotal2:
            answer = 0
    return answer