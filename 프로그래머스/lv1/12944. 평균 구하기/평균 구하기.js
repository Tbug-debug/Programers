function solution(arr) {
    let result = arr.reduce((a, b) => a + b);
    return result / arr.length
}