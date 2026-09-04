def solution(a, d, included):
    return sum(a + i * d for i, flag in enumerate(included) if flag)