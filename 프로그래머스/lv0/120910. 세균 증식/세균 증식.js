function solution(n, t) {
      let num = n;
        for (let i = 1; i <= t; i++) {
          num *= 2;
        }
        return num;
}