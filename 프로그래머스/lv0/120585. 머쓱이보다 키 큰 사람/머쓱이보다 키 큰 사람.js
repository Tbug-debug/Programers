function solution(array, height) {
    let result = array.filter((n) => n > height);
    return result.length
}