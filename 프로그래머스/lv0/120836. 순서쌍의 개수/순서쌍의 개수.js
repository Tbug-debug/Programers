function solution(n) {
        let reuslut = [];
        for (let i = 0; i <= n; i++) {
          if (n % i === 0) {
            reuslut.push(i);
          }
        }
        return reuslut.length;
}