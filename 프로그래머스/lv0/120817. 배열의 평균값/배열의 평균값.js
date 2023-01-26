function solution(numbers) {
    let number = [...numbers];
    let result = number.reduce((a, b) => a + b);
    return result / number.length;
}