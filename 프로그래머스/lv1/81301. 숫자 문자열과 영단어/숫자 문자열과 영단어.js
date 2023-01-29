function solution(s) {
let num = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

    num.forEach((a, i) => {
        s = s.replaceAll(num[i], i); //replaceAll(a,b)는 모든 a를 b로 바꿔달라는 뜻이다. 
    });

    return Number(s);
}