function solution(n) {
 let str = String(n);
    let arr = [...str];
    let num = [];
    arr.forEach((a) => num.push(Number(a)));
    return num.reverse();
}