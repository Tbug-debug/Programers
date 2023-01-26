function solution(n) {
    let sum = 0;
        for (let i = n; i > 0; i--) {
          if (i % 2 == 0) {
            sum += i;
          }
        }
       return sum;
      }