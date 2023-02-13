function solution(x) {
 let str = String(x);
    let arr = [...str];
    return Number(arr.sort((a, b) => b - a).join(''))
}