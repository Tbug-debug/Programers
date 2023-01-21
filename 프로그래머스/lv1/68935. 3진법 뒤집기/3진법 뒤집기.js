function solution(n) {
  let third = n.toString(3);
    let arr = [...third];
    let num = arr.reverse().join('');
    let answer = parseInt(num, 3).toString(10);
    return Number(answer);
}